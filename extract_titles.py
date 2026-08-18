import os
import re
import json

pages_dir = 'client/src/pages'
results = {}

files = [f for f in os.listdir(pages_dir) if f.endswith('.tsx')]

def clean_title(t):
    # Remove excessive whitespace/newlines
    t = re.sub(r'\s+', ' ', t).strip()
    # Handle {unit.title} or similar dynamic strings - try to find the actual title in the code
    return t

for filename in files:
    filepath = os.path.join(pages_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    file_key = os.path.splitext(filename)[0]
    title = None
    
    # Special cases for the dynamic ones found in previous run
    if file_key == "Academy":
        # Look for COURSE_META
        m = re.search(r'const\s+COURSE_META\s*=\s*\{\s*title:\s*["\']([^"\']+)["\']', content)
        if m: title = m.group(1)
    elif file_key == "AcademyUnit":
        m = re.search(r'title:\s*["\']([^"\']+)["\']', content) # often the first title: is the unit title
        if m: title = m.group(1)
    elif file_key == "Tags":
        m = re.search(r'label:\s*["\']([^"\']+)["\']', content)
        if m: title = m.group(1)
    elif file_key == "CosmicEssayPage":
        m = re.search(r'title:\s*["\']([^"\']+)["\']', content)
        if m: title = m.group(1)

    if not title:
        # 1. Look for SEO title prop
        seo_match = re.search(r'<SEO\s+[^>]*title=["\']([^"\']+)["\']', content)
        if seo_match:
            title = seo_match.group(1)
    
    if not title:
        # 2. Look for PageHeader title prop
        ph_match = re.search(r'<PageHeader\s+[^>]*title=["\']([^"\']+)["\']', content)
        if ph_match:
            title = ph_match.group(1)

    if not title:
        # 3. Look for a const named title/heading/pageTitle near the top
        const_match = re.search(r'const\s+(?:title|heading|pageTitle)\s*=\s*["\']([^"\']+)["\']', content[:3000])
        if const_match:
            title = const_match.group(1)

    if not title:
        # 4. Look for the first <h1> or <h2> content
        h_match = re.search(r'<(h1|h2)[^>]*>(.*?)<\/\1>', content, re.DOTALL)
        if h_match:
            title = re.sub(r'<[^>]+>', '', h_match.group(2)).strip()

    if not title:
        # 5. Look for title: "..." in a data structure if it seems like a page config
        title_prop_match = re.search(r'title:\s*["\']([^"\']+)["\']', content[:3000])
        if title_prop_match:
            title = title_prop_match.group(1)

    if not title or title == "Unknown Title" or "{" in title:
        # Final fallback: filename to Title Case
        if not title or "{" in title:
            title = re.sub(r'([a-z])([A-Z])', r'\1 \2', file_key)

    results[file_key] = clean_title(title)

# Sort alphabetically by filename
sorted_results = dict(sorted(results.items()))
print(json.dumps(sorted_results, indent=2))
