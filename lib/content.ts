export const CHECKINS = [
  {
    screen: "dawn" as const,
    src: "/assets/dawn.png",
    alt: "Cal Club Morning Brief screen",
    tint: "rgba(217,130,100,0.34)",
    fade: "rgba(217,130,100,0.05)",
    label: "Dawn",
    title: "Morning Brief",
    body:
      "A plan for the day ahead. Wake up to your target, what you trained, and where to land your meals.",
  },
  {
    screen: "midday" as const,
    src: "/assets/midday-checkin.png",
    alt: "Cal Club Midday Check-in screen",
    tint: "rgba(110,130,148,0.36)",
    fade: "rgba(110,130,148,0.05)",
    label: "Midday",
    title: "Midday Check-in",
    body:
      "A nudge while there's still time. Behind on protein? Cal Club hands you the plate, not the math.",
  },
  {
    screen: "now" as const,
    src: "/assets/now.png",
    alt: "Cal Club Day Summary screen",
    tint: "rgba(50,58,82,0.42)",
    fade: "rgba(50,58,82,0.06)",
    label: "Now",
    title: "Day Summary",
    body:
      "An honest read of how the day landed — calories earned, protein hit, what to carry into tomorrow.",
  },
];

export const PROBLEMS = [
  {
    num: "01",
    title: "Trackers count what you ate.",
    body: "They don't tell you what to eat next.",
  },
  {
    num: "02",
    title: "Generic plans ignore your training.",
    body: "A heavy leg day and a rest day shouldn't look the same.",
  },
  {
    num: "03",
    title: "Eating right shouldn't feel like a second job.",
    body:
      "Tracking macros, guessing portions, checking labels — Cal Club does it for you.",
  },
];

export const FAQS = [
  {
    q: "How is Cal Club different from ChatGPT?",
    a: "ChatGPT can answer nutrition questions, but it forgets you between conversations. It doesn't know what you ate yesterday, what you trained today, or whether you're behind on protein right now. Cal Club remembers all of it — and uses it to coach you in real time, not just respond when asked.",
  },
  {
    q: "How is this different from MyFitnessPal or HealthifyMe?",
    a: "Trackers log what you ate. Cal Club tells you what to eat next. If you trained heavy in the morning, Cal Club knows you need more protein at dinner — and suggests exactly what to have. MyFitnessPal will tell you you're 60g short. Cal Club will hand you the plate.",
  },
  {
    q: "Does Cal Club work with Indian food?",
    a: 'Yes — Cal Club is built for the food Indians actually eat. Dal, roti, sabzi, biryani, paneer, dosa, and thousands of other home-cooked and restaurant dishes are recognized accurately. It also separates the protein from the curry — so chicken pieces and paneer cubes are logged individually, not mashed into one "chicken curry" estimate.',
  },
  {
    q: "Do I need to log every meal?",
    a: 'No. You can snap a photo, describe a meal in a sentence ("two rotis, dal, half a bowl of sabzi"), or pick from meals you\'ve logged before. Most people log in seconds. Skip a meal and Cal Club just works with what it knows — no guilt, no streak penalty.',
  },
  {
    q: "What does Cal Club cost?",
    a: "Cal Club is free to download and comes with a 3-day trial. The premium plan unlocks unlimited AI coaching, personalized check-ins, and AI-powered meal logging. Full pricing is in the app.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Your food logs, conversations, and training data are encrypted at rest and in transit. We don't sell your data, we don't share it with advertisers, and we don't use your conversations to train external AI models. What you tell Cal Club stays with Cal Club.",
  },
  {
    q: "I work out casually — will this still work for me?",
    a: 'Cal Club works for any level. Whether you do three gym sessions a week, the occasional run, or just walk daily, Cal Club adapts. It scales protein targets to your training, suggests meals that fit your real life, and never assumes you\'re a competitive athlete. The bar is "you care about how you eat" — that\'s it.',
  },
];
