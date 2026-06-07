/* The neurochemicals — the single source for the eight chemicals across the site.
   Edit a chemical here and science.html, balance.html and fire.html all follow.
   Mirrors neurochemicals-dictionary.md (reviewed 31 May 2026). British English.
   type: calm = calming, mixed = reward, active = stress. */

(function (root) {
  var CHEMICALS = [
    {
      key: 'oxytocin', code: 'Ox', name: 'Oxytocin', type: 'calm',
      kind: 'Hormone', produced: 'the brain',
      summary: 'Promotes bonding, trust and social connection',
      does: [
        'Promotes trust, attachment, and social recognition',
        'Reduces cortisol and can lower blood pressure',
        'Strengthens mother-infant bonding and pair bonds',
        'Increases in-group cooperation, but can heighten wariness toward out-groups'
      ],
      triggers: [
        'Felt safety and physical warmth',
        'Skin-to-skin contact and gentle touch',
        'Eye contact and sustained gaze',
        'Breastfeeding and labour',
        'Shared meals and physical proximity',
        'Warm, familiar voices'
      ]
    },
    {
      key: 'serotonin', code: 'Se', name: 'Serotonin', type: 'calm',
      kind: 'Neurotransmitter', produced: 'the brain and gut',
      summary: 'Regulates mood, emotional stability, sleep, and digestion',
      does: [
        'Regulates mood, emotional stability, and sleep cycles',
        'Modulates aggression and impulse control',
        'Regulates appetite, digestion, and gut motility',
        "About 95% of the body's serotonin is in the gut, where it acts separately from the brain",
        'Supports a steady, settled mood that makes social ease more accessible'
      ],
      triggers: [
        'Stable, settled social environments',
        'Felt safety and physical warmth',
        'Physical touch and proximity',
        'Physical exercise and sunlight exposure',
        'A healthy, diverse gut microbiome'
      ]
    },
    {
      key: 'gaba', code: 'Ga', name: 'GABA', type: 'calm',
      kind: 'Neurotransmitter', produced: 'the brain',
      summary: "Calms neural activity, the brain's main brake",
      does: [
        'Primary inhibitory neurotransmitter in the brain',
        'Reduces neural excitability and calms firing patterns',
        'Promotes sleep onset and deepens sleep quality',
        'Counterbalances the excitatory effects of glutamate'
      ],
      triggers: [
        'Slow, extended exhalation',
        'Physical exercise over time',
        'Parasympathetic activation and felt safety',
        'Sleep'
      ]
    },
    {
      key: 'endorphins', code: 'En', name: 'Endorphins', type: 'mixed',
      kind: 'Hormone', produced: 'the brain',
      summary: "The body's natural painkillers, easing pain and lifting mood",
      does: [
        'Bind to opioid receptors, reducing pain perception',
        'Produce pleasure, from calm comfort to euphoria',
        'Increase pain tolerance during sustained physical effort',
        'Amplify social bonding when released in groups'
      ],
      triggers: [
        'Sustained physical exercise',
        'Laughter, especially social laughter',
        'Singing, chanting, and rhythmic vocalisation',
        'Synchronised group movement and dance',
        'Physical touch and grooming'
      ]
    },
    {
      key: 'dopamine', code: 'Do', name: 'Dopamine', type: 'mixed',
      kind: 'Neurotransmitter', produced: 'the brain',
      summary: 'Drives motivation, anticipation and reward-seeking',
      does: [
        'Drives anticipation, motivation, and reward-seeking',
        'Creates the feeling of wanting, not the feeling of having',
        'Encodes learning when outcomes exceed expectations',
        'Supports movement, attention, and working memory'
      ],
      triggers: [
        'Anticipation of food, pleasure, or social reward',
        'Novel environments and exploration',
        'Achieving a goal or completing a task',
        'Unexpected positive outcomes'
      ]
    },
    {
      key: 'norepinephrine', code: 'No', name: 'Norepinephrine', type: 'active',
      kind: 'Neurotransmitter', produced: 'the brain and adrenal glands',
      summary: 'Sharpens focus and alertness',
      does: [
        'Primary neurotransmitter of the sympathetic nervous system',
        'Sharpens attention, alertness, and sensory acuity',
        'Increases heart rate and redirects blood to muscles',
        'Consolidates emotionally significant memories'
      ],
      triggers: [
        'Perceived threat or challenge',
        'Sudden loud sounds or unexpected stimuli',
        'Physical danger requiring rapid response',
        'Any activation of the sympathetic nervous system'
      ]
    },
    {
      key: 'adrenaline', code: 'Ad', name: 'Adrenaline', type: 'active',
      kind: 'Hormone', produced: 'the adrenal glands',
      summary: 'The fast fight-or-flight surge',
      does: [
        'Triggers the immediate fight-or-flight response within seconds',
        'Raises heart rate, blood pressure, and breathing rate',
        'Dilates pupils and opens airways',
        'Diverts blood from digestion to skeletal muscles'
      ],
      triggers: [
        'Acute physical threat or perceived danger',
        'Sudden fright or startle response',
        'Intense physical exertion',
        'Extreme cold or pain'
      ]
    },
    {
      key: 'cortisol', code: 'Co', name: 'Cortisol', type: 'active',
      kind: 'Hormone', produced: 'the adrenal glands',
      summary: 'Sustains the stress response over longer periods',
      does: [
        'Mobilises glucose from the liver into the bloodstream',
        'Suppresses immune function and inflammatory response',
        'Temporarily sharpens memory and sensory focus',
        'Sustains the stress response over minutes to hours'
      ],
      triggers: [
        'Perceived threat, pain, or physical danger',
        'Sleep deprivation and disrupted circadian rhythm',
        'Sustained social isolation',
        'Prolonged physical exertion or illness',
        'Natural rise at dawn to support waking'
      ]
    }
  ];

  /* keyed by lowercase name, for the chip / modal lookups (balance, fire) */
  var CHEM = {};
  CHEMICALS.forEach(function (c) { CHEM[c.key] = c; });
  CHEM['moderate cortisol'] = CHEM.cortisol;

  /* name -> one-line summary, for the science table */
  var CHEM_SUMMARY = {};
  CHEMICALS.forEach(function (c) { CHEM_SUMMARY[c.name] = c.summary; });

  root.CHEMICALS = CHEMICALS;
  root.CHEM = CHEM;
  root.CHEM_SUMMARY = CHEM_SUMMARY;
})(window);
