import { useState } from "react";
import { Copy, Check, ExternalLink, Twitter } from "lucide-react";

const ARCHIVE = "https://barrandodger.com";

const THREAD: { n: number; text: string }[] = [
  {
    n: 1,
    text: `🧵 1,100,000+ people downloaded this archive with zero advertising. The Australian government knows it exists. They have not filed one defamation action. Here's why that matters legally. /1`,
  },
  {
    n: 2,
    text: `Dr. Richard McLean spent 35 years documenting what 13 Australian government agencies did to him. 3,643 primary source documents. Their own correspondence. Their own refusals. Their own silence. ${ARCHIVE} /2`,
  },
  {
    n: 3,
    text: `The scale:\n— 14 forced psychiatric hospitalisations\n— 0 criminal charges ever\n— 350+ fraudulent ASIC business registrations made in his name\n— Federal Court confirmed PID Act thresholds met\n— Then declined on procedure /3`,
  },
  {
    n: 4,
    text: `He was found with no pulse in 2021 at Werribee Mercy Hospital. Clinical survival probability: 2.87%. He survived. He kept documenting. The medical records are in the archive. /4`,
  },
  {
    n: 5,
    text: `In April 2024, ex-SAS government official Tony Ridley sent a documented message: "You will be sacrificed." It was reported to police. No charges were laid against Ridley. The document is blockchain-sealed. /5`,
  },
  {
    n: 6,
    text: `The ICC has his Article 7 (Crimes Against Humanity) submission.\nThe UN OHCHR has case reference UR/UST/23/AUS/17.\n\nNeither has been challenged or contradicted by the Australian government. /6`,
  },
  {
    n: 7,
    text: `52 independent AI forensic analyses (GPT, Claude, Gemini) verified 675 propositions extracted from the archive.\n\nResult: 675/675 confirmed. Zero contradictions.\n\nThe AI was given documents only — no framing, no context. /7`,
  },
  {
    n: 8,
    text: `In August 2026, his brother Danny pressed criminal charges against him — days after evidence was published showing Danny knew about the conspiracy. The counter-attack is documented too. /8`,
  },
  {
    n: 9,
    text: `An Open Professional Challenge is live until 7 September 2026:\n\nName one false claim. Publish a factual rebuttal with your name on it.\n\nNo Australian doctor, lawyer, politician, or journalist has. Under Jones v Dunkel, that silence is legally significant. /9`,
  },
  {
    n: 10,
    text: `You've just read the thread. Now you have a choice.\n\nRead the archive — it's free.\nShare this thread.\nOr explain why 1,100,000 downloads and zero defamation actions means nothing.\n\n${ARCHIVE} /10 🔗`,
  },
];

const FULL_THREAD = THREAD.map((t) => t.text).join("\n\n---\n\n");

const HOOK_TWEET_URL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(THREAD[0].text + "\n\n" + ARCHIVE)}&via=bazdod`;

function TweetCard({ tweet }: { tweet: { n: number; text: string } }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(tweet.text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet.text)}&via=bazdod`;
  const charCount = tweet.text.length;
  const overLimit = charCount > 280;

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 text-xs font-black font-mono border border-sky-500/30">
            {tweet.n}
          </span>
          <span className={`text-xs font-mono ${overLimit ? "text-red-400" : "text-zinc-500"}`}>
            {charCount}/280
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={copy}
            className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold px-2.5 py-1.5 rounded-lg transition-colors"
          >
            {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            {copied ? "Copied" : "Copy"}
          </button>
          <a
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-bold px-2.5 py-1.5 rounded-lg transition-colors"
          >
            <ExternalLink className="h-3 w-3" /> Post
          </a>
        </div>
      </div>
      <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap">{tweet.text}</p>
    </div>
  );
}

export function TweetThreadKit({ className = "" }: { className?: string }) {
  const [allCopied, setAllCopied] = useState(false);

  const copyAll = () => {
    navigator.clipboard?.writeText(FULL_THREAD).catch(() => {});
    setAllCopied(true);
    setTimeout(() => setAllCopied(false), 3000);
  };

  return (
    <div className={`space-y-4 ${className}`} data-testid="tweet-thread-kit">
      {/* Header */}
      <div className="rounded-2xl border border-sky-800/40 bg-sky-950/20 p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Twitter className="h-5 w-5 text-sky-400" />
          <p className="text-sky-300 text-xs font-mono uppercase tracking-widest font-bold">
            X / Twitter — Full 10-Tweet Thread
          </p>
        </div>
        <p className="text-zinc-400 text-xs leading-relaxed">
          Copy each tweet individually and post them as a thread, or use "Copy All" and paste into a thread
          tool. Tweet 1 opens directly in X.
        </p>
        <div className="flex flex-wrap gap-2">
          <a
            href={HOOK_TWEET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold bg-sky-500 hover:bg-sky-400 text-white px-3 py-2 rounded-lg transition-colors"
          >
            <ExternalLink className="h-3 w-3" /> Start Thread in X
          </a>
          <button
            onClick={copyAll}
            className="flex items-center gap-1.5 text-xs font-bold bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-3 py-2 rounded-lg transition-colors"
          >
            {allCopied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            {allCopied ? "All Copied!" : "Copy All 10 Tweets"}
          </button>
        </div>
      </div>

      {/* Individual tweets */}
      <div className="space-y-2">
        {THREAD.map((t) => (
          <TweetCard key={t.n} tweet={t} />
        ))}
      </div>
    </div>
  );
}
