const firstAidData = [
  {
    name: 'Asthma',
    category: 'Respiratory',
    title: 'A chronic respiratory condition characterized by inflammation and narrowing of the airways, leading to breathing difficulties.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Shortness of breath',
      'Wheezing',
      'Chest tightness',
      'Coughing, especially at night or early morning'
    ],
    measures: [
      'Help the person sit upright and stay calm',
      'Assist them in using their inhaler (usually a blue reliever)',
      'Encourage slow, steady breaths',
      'If symptoms worsen or do not improve after 5-10 minutes, seek emergency medical help'
    ]
  },
  {
    name: 'Choking',
    category: 'Respiratory',
    title: 'A blockage of the upper airway by food or other objects, which prevents a person from breathing effectively.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Inability to speak, cry out, or cough forcefully',
      'Clutching the throat',
      'Bluish skin color',
      'Weak, ineffective coughing',
      'Loss of consciousness (in severe cases)'
    ],
    measures: [
      'For a conscious person: Perform abdominal thrusts (Heimlich maneuver)',
      'For an unconscious person: Start CPR',
      'For infants: Perform back blows and chest thrusts',
      'Continue until the object is expelled or the person becomes unconscious',
      'Seek immediate medical attention'
    ]
  },
  {
    name: 'Pneumothorax',
    category: 'Respiratory',
    title: 'A collapse of the lung caused by air in the space between the lung and the chest wall.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Sudden, sharp chest pain',
      'Shortness of breath',
      'Rapid breathing',
      'Rapid heart rate',
      'Bluish skin color due to lack of oxygen'
    ],
    measures: [
      'Call emergency services immediately',
      'Help the person into a comfortable position, usually sitting up',
      'Encourage them to take slow, deep breaths',
      'Monitor their breathing and consciousness',
      'Be prepared to perform CPR if they lose consciousness'
    ]
  },
  {
    name: 'Hyperventilation',
    category: 'Respiratory',
    title: 'Excessive breathing that leads to a decrease in carbon dioxide in the blood, often triggered by anxiety or panic.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Rapid, deep breathing',
      'Dizziness or lightheadedness',
      'Numbness or tingling in hands and feet',
      'Chest pain or tightness',
      'Rapid heartbeat'
    ],
    measures: [
      'Encourage the person to stay calm',
      'Help them slow their breathing (breathe in for 4 counts, hold for 4, exhale for 4)',
      'Encourage them to breathe into a paper bag if available',
      'Remove them from stressful situations if possible',
      'If symptoms persist, seek medical attention'
    ]
  },
  {
    name: 'Heart Attack',
    category: 'Circulatory',
    title: 'A blockage of blood flow to the heart muscle, often due to a blood clot, leading to damage or death of part of the heart muscle.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Chest pain or pressure',
      'Pain radiating to arm, jaw, neck, or back',
      'Shortness of breath',
      'Nausea or vomiting',
      'Cold sweat',
      'Lightheadedness'
    ],
    measures: [
      'Call emergency services immediately',
      'Have the person sit or lie down comfortably',
      'Give aspirin if available and not allergic',
      'Loosen tight clothing',
      'Be prepared to perform CPR if they become unconscious'
    ]
  },
  {
    name: 'Stroke',
    category: 'Circulatory',
    title: 'A disruption of blood supply to part of the brain, causing brain cells to die.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Sudden numbness or weakness in face, arm, or leg (especially on one side)',
      'Sudden confusion or trouble speaking',
      'Sudden trouble seeing in one or both eyes',
      'Sudden trouble walking, dizziness, loss of balance',
      'Sudden severe headache'
    ],
    measures: [
      'Call emergency services immediately',
      'Note the time when symptoms started',
      'Perform the FAST test (Face drooping, Arm weakness, Speech difficulty, Time to call)',
      'Keep the person calm and still',
      'Do not give them anything to eat or drink'
    ]
  },
  {
    name: 'Severe Bleeding',
    category: 'Circulatory',
    title: 'Excessive loss of blood from a wound or injury that can lead to shock if not controlled.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Visible, profuse bleeding',
      'Pale, cool, clammy skin',
      'Weakness or dizziness',
      'Rapid, shallow breathing',
      'Confusion or loss of consciousness'
    ],
    measures: [
      'Call emergency services',
      'Apply direct pressure to the wound with a clean cloth or sterile dressing',
      'If possible, elevate the injured area above the heart',
      'Do not remove the cloth if it becomes soaked; add more on top',
      'For severe limb bleeding, consider applying a tourniquet as a last resort'
    ]
  },
  {
    name: 'Shock',
    category: 'Circulatory',
    title: "A life-threatening condition where the body's organs and tissues don't receive enough blood flow.",
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Pale, cool, clammy skin',
      'Rapid, shallow breathing',
      'Weakness or fatigue',
      'Confusion or altered mental state',
      'Rapid, weak pulse'
    ],
    measures: [
      'Call emergency services immediately',
      'Have the person lie down with feet elevated about 12 inches',
      'Keep them warm with blankets',
      'Do not give anything by mouth',
      'Treat any visible injuries'
    ]
  },
  {
    name: 'Head Injury',
    category: 'Traumatic',
    title: 'Any trauma to the head that may affect the brain, ranging from a mild concussion to a severe traumatic brain injury.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Loss of consciousness',
      'Confusion or disorientation',
      'Headache',
      'Nausea or vomiting',
      'Dizziness',
      'Unequal pupil size'
    ],
    measures: [
      'Call emergency services for any significant head injury',
      'Keep the person still to prevent further injury',
      "If they're unconscious, check breathing and pulse",
      'Stop any bleeding with gentle pressure (avoid pressing on suspected skull fracture)',
      'Do not remove any object penetrating the head'
    ]
  },
  {
    name: 'Spinal Cord Injury',
    category: 'Traumatic',
    title: 'Damage to the spinal cord that can result in loss of function, feeling, or mobility.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Loss of movement',
      'Loss of sensation, including heat, cold, and touch',
      'Loss of bowel or bladder control',
      'Exaggerated reflex activities or spasms',
      'Difficulty breathing'
    ],
    measures: [
      'Call emergency services immediately',
      'Do not move the person unless in immediate danger',
      'Encourage them to remain still',
      'If they must be moved, use the log-rolling technique to keep the spine aligned',
      'Support the head and neck to prevent movement'
    ]
  },
  {
    name: 'Fractures',
    category: 'Traumatic',
    title: 'A break in a bone, which can be complete or partial.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Pain and swelling',
      'Deformity or abnormal positioning',
      'Difficulty moving the affected area',
      'Grinding or crackling sound',
      'Visible bone in an open fracture'
    ],
    measures: [
      'Call emergency services for serious fractures',
      'Keep the injured area immobilized',
      'Apply cold packs to reduce swelling',
      'For open fractures, cover the wound with a clean cloth',
      'Do not attempt to realign the bone or push a protruding bone back in'
    ]
  },
  {
    name: 'Dislocations',
    category: 'Traumatic',
    title: 'An injury in which the bones in a joint are forced out of their normal positions.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Intense pain',
      'Swelling',
      'Difficulty moving the joint',
      'Visible deformity',
      'Numbness or tingling around the joint'
    ],
    measures: [
      'Call emergency services',
      'Do not attempt to move or relocate the joint',
      'Immobilize the joint in the position found',
      'Apply cold packs to reduce swelling and pain',
      'Check circulation beyond the injury'
    ]
  },
  {
    name: 'Burns',
    category: 'Traumatic',
    title: 'Tissue damage caused by heat, chemicals, electricity, sunlight, or radiation.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Redness and pain (1st degree)',
      'Blistering (2nd degree)',
      'White or charred skin (3rd degree)',
      'Swelling',
      'Difficulty breathing if burns are on face/neck'
    ],
    measures: [
      'Remove the source of the burn',
      'Cool the burn with cool (not cold) running water for at least 10 minutes',
      'Cover with a clean, dry dressing',
      'Do not apply ice, butter, or ointments',
      'Seek medical attention for severe or large burns'
    ]
  },
  {
    name: 'Anaphylaxis',
    category: 'Allergic',
    title: 'A severe, potentially life-threatening allergic reaction that can affect multiple body systems.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Difficulty breathing or wheezing',
      'Swelling of throat and tongue',
      'Hives or widespread rash',
      'Dizziness or fainting',
      'Rapid, weak pulse'
    ],
    measures: [
      'Call emergency services immediately',
      'Help the person use an epinephrine auto-injector if available',
      'Have them lie down with feet elevated',
      'Loosen tight clothing',
      'If breathing stops, begin CPR'
    ]
  },
  {
    name: 'Severe Allergic Reactions',
    category: 'Allergic',
    title: 'An exaggerated immune response to a substance, which can range from mild to severe.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Hives or rash',
      'Itching',
      'Swelling, especially of face, tongue, or throat',
      'Difficulty breathing',
      'Nausea or vomiting'
    ],
    measures: [
      'Identify and remove the allergen if possible',
      'Call emergency services if symptoms are severe',
      'Administer antihistamine if available',
      'Monitor breathing and circulation',
      'Be prepared to treat for anaphylaxis'
    ]
  },
  {
    name: 'Insect Stings/Bites',
    category: 'Allergic',
    title: 'Injuries caused by insects, which can range from minor irritation to severe allergic reactions.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Pain at the site',
      'Redness and swelling',
      'Itching',
      'In severe cases: difficulty breathing, dizziness'
    ],
    measures: [
      "Remove the stinger if present (scrape, don't squeeze)",
      'Clean the area with soap and water',
      'Apply a cold compress',
      'Take an antihistamine for itching',
      'Watch for signs of severe allergic reaction'
    ]
  },
  {
    name: 'Hypothermia',
    category: 'Environmental',
    title: 'A dangerous drop in body temperature below 95°F (35°C), often due to prolonged exposure to cold.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Shivering',
      'Slurred speech',
      'Slow, shallow breathing',
      'Weak pulse',
      'Confusion or sleepiness'
    ],
    measures: [
      'Move the person to a warm, dry place',
      'Remove wet clothing and wrap in warm blankets',
      'Provide warm, non-alcoholic drinks if conscious',
      'Use skin-to-skin contact under loose, dry layers of blankets',
      'Seek medical attention, especially if severe'
    ]
  },
  {
    name: 'Heat Stroke',
    category: 'Environmental',
    title: 'A severe condition where the body overheats, typically above 104°F (40°C), due to prolonged exposure to high temperatures.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'High body temperature',
      'Altered mental state or behavior',
      'Hot, red, dry, or moist skin',
      'Rapid, strong pulse',
      'Possible unconsciousness'
    ],
    measures: [
      'Call emergency services immediately',
      'Move the person to a cooler environment',
      'Remove excess clothing',
      'Cool the person with whatever methods available (cold water, ice packs)',
      'Do not give fluids'
    ]
  },
  {
    name: 'Frostbite',
    category: 'Environmental',
    title: 'Freezing of body tissues, typically affecting extremities, due to prolonged exposure to freezing temperatures.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Cold, prickly feeling',
      'Numbness',
      'Hard or waxy-looking skin',
      'Skin color turns white, gray, or blue',
      'Blistering in severe cases'
    ],
    measures: [
      'Move to a warm area',
      'Remove wet or tight clothing',
      'Immerse the affected area in warm (not hot) water',
      'Do not rub or massage the frostbitten area',
      'Seek medical attention'
    ]
  },
  {
    name: 'Dehydration',
    category: 'Environmental',
    title: 'A condition where the body loses more fluids than it takes in, disrupting normal bodily functions.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Extreme thirst',
      'Less frequent urination',
      'Dark-colored urine',
      'Fatigue',
      'Dizziness'
    ],
    measures: [
      'Move to a cool place if heat-related',
      'Encourage drinking small amounts of water frequently',
      'For severe cases, use oral rehydration solutions',
      'If unable to keep fluids down, seek medical attention',
      'Avoid caffeine and alcohol'
    ]
  },
  {
    name: 'Sunburn',
    category: 'Environmental',
    title: 'Skin damage from overexposure to ultraviolet (UV) rays, typically from the sun.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Red, warm skin',
      'Pain and tenderness',
      'Swelling',
      'Blistering in severe cases',
      'Fever and chills in extreme cases'
    ],
    measures: [
      'Move out of the sun',
      'Cool the skin with cool baths or moist cloths',
      'Apply moisturizing lotion (avoid petroleum or oil-based)',
      'Do not break blisters',
      'Stay hydrated and consider pain relievers if necessary'
    ]
  },
  {
    name: 'Drug Overdose',
    category: 'Poisoning',
    title: 'Ingestion or use of a drug in quantities greater than recommended or generally practiced, potentially leading to toxic effects.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Drowsiness or loss of consciousness',
      'Shallow or no breathing',
      'Pinpoint pupils (opioids)',
      'Nausea or vomiting',
      'Seizures or tremors'
    ],
    measures: [
      'Call emergency services immediately',
      'If unconscious, check breathing and pulse',
      'If not breathing, begin CPR',
      'If conscious, keep them awake and monitor their condition',
      'Do not induce vomiting unless instructed by professionals'
    ]
  },
  {
    name: 'Carbon Monoxide Poisoning',
    category: 'Poisoning',
    title: 'Exposure to high levels of carbon monoxide, an odorless, colorless gas produced by burning fuel.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Headache',
      'Dizziness',
      'Weakness',
      'Nausea or vomiting',
      'Shortness of breath',
      'Confusion'
    ],
    measures: [
      'Remove the person from the area immediately',
      'Call emergency services',
      'Open windows and doors if safe to do so',
      'If the person is not breathing, begin CPR',
      'Do not re-enter the area until declared safe'
    ]
  },
  {
    name: 'Food Poisoning',
    category: 'Poisoning',
    title: 'Illness caused by consuming contaminated food or drink.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Nausea and vomiting',
      'Diarrhea',
      'Abdominal pain or cramps',
      'Fever',
      'Weakness'
    ],
    measures: [
      'Rest and stay hydrated with clear fluids',
      'Avoid solid foods until vomiting stops',
      'Gradually introduce bland, easy-to-digest foods',
      'Use over-the-counter remedies for diarrhea if needed',
      'Seek medical attention if symptoms are severe or persistent'
    ]
  },
  {
    name: 'Chemical Exposure/Burns',
    category: 'Poisoning',
    title: 'Contact with harmful chemicals that can cause injury to skin, eyes, or internal organs if ingested or inhaled.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Skin irritation, redness, or burns',
      'Eye irritation or vision changes',
      'Difficulty breathing',
      'Nausea or vomiting',
      'Dizziness or headache'
    ],
    measures: [
      'Remove the person from the contaminated area',
      'Remove contaminated clothing',
      'Flush affected area with copious amounts of water for at least 15 minutes',
      'Do not attempt to neutralize the chemical',
      'Seek immediate medical attention'
    ]
  },
  {
    name: 'Seizures',
    category: 'Neurological',
    title: 'Sudden, uncontrolled electrical disturbance in the brain that can cause changes in behavior, movements, or consciousness.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Temporary confusion',
      'Staring spell',
      'Uncontrollable jerking movements',
      'Loss of consciousness or awareness',
      'Cognitive or emotional symptoms (fear, anxiety, deja vu)'
    ],
    measures: [
      'Stay calm and time the seizure',
      'Clear the area of hazards',
      'Protect the head with something soft',
      'Do not restrain the person or put anything in their mouth',
      'After the seizure, turn them on their side and stay until fully recovered'
    ]
  },
  {
    name: 'Fainting',
    category: 'Neurological',
    title: 'Temporary loss of consciousness due to a drop in blood flow to the brain.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Dizziness or lightheadedness before fainting',
      'Brief loss of consciousness',
      'Pale or clammy skin',
      'Confusion upon waking',
      'Possible injury from falling'
    ],
    measures: [
      'Lay the person flat on their back',
      'Elevate their feet about 12 inches',
      'Loosen tight clothing',
      'Check for breathing and pulse',
      "If they don't regain consciousness quickly, call emergency services"
    ]
  },
  {
    name: 'Concussion',
    category: 'Traumatic',
    title: 'A type of traumatic brain injury caused by a bump, blow, or jolt to the head.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Headache',
      'Confusion',
      'Dizziness',
      'Ringing in the ears',
      'Nausea or vomiting',
      'Temporary loss of consciousness'
    ],
    measures: [
      'Seek medical attention, especially if symptoms are severe',
      'Rest and avoid physical activities',
      'Apply cold packs to the head or neck for comfort',
      'Monitor for worsening symptoms',
      'Avoid screens and cognitive strain'
    ]
  },
  {
    name: 'Sprains and Strains',
    category: 'Musculoskeletal',
    title: 'Injuries to ligaments (sprains) or muscles and tendons (strains).',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Pain',
      'Swelling',
      'Bruising',
      'Limited flexibility',
      'Difficulty using the affected part'
    ],
    measures: [
      'Follow the RICE method: Rest, Ice, Compression, Elevation',
      'Apply ice for 20 minutes at a time, several times a day',
      'Use an elastic bandage to compress the area, but not too tightly',
      'Elevate the injured area above the heart',
      'Seek medical attention for severe pain or inability to use the limb'
    ]
  },
  {
    name: 'Muscle Cramps',
    category: 'Musculoskeletal',
    title: 'Sudden, involuntary contraction of one or more muscles.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Sudden, sharp pain',
      'Hard, tight muscle',
      'Possible visible or palpable muscle knot',
      'Temporary inability to use the affected muscle'
    ],
    measures: [
      'Gently stretch and massage the affected muscle',
      'Apply heat to relax the muscle',
      'If caused by heat or dehydration, cool down and rehydrate',
      'For recurrent cramps, consider electrolyte beverages',
      'If severe or frequent, consult a healthcare provider'
    ]
  },
  {
    name: 'Back Injuries',
    category: 'Musculoskeletal',
    title: 'Damage to the muscles, bones, ligaments, or discs of the back.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Pain that worsens with movement',
      'Muscle spasm',
      'Stiffness',
      'Difficulty standing straight',
      'Possible numbness or tingling in legs'
    ],
    measures: [
      'Avoid movement if severe pain or if spinal injury is suspected',
      'Apply ice for the first 48-72 hours, then switch to heat',
      'Take over-the-counter pain relievers if needed',
      'Use proper body mechanics when moving',
      'Seek medical attention if pain is severe or persistent'
    ]
  },
  {
    name: 'Eye Injuries',
    category: 'Ophthalmic',
    title: 'Damage to the eye or surrounding area.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Pain or irritation in the eye',
      'Redness',
      'Swelling',
      'Difficulty opening the eye',
      'Vision changes or loss'
    ],
    measures: [
      'Do not rub or apply pressure to the eye',
      'For small debris, blink or flush with water',
      'For embedded objects, do not attempt removal',
      'Cover the eye with a clean dressing',
      'Seek immediate medical attention'
    ]
  },
  {
    name: 'Chemical Splash in Eyes',
    category: 'Ophthalmic',
    title: 'Exposure of the eye to harmful chemicals.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Burning or stinging sensation',
      'Redness and irritation',
      'Tearing',
      'Blurred vision',
      'Swelling of the eye or eyelids'
    ],
    measures: [
      'Immediately flush the eye with cool water for at least 15 minutes',
      'Hold the eyelid open to ensure thorough rinsing',
      'Do not rub the eye',
      'Remove contact lenses if present',
      'Seek immediate medical attention'
    ]
  },
  {
    name: 'Panic Attacks',
    category: 'Mental Health',
    title: 'Sudden episodes of intense fear that trigger severe physical reactions when no real danger is present.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Rapid heartbeat',
      'Sweating',
      'Trembling',
      'Shortness of breath',
      'Feeling of impending doom or danger'
    ],
    measures: [
      'Stay with the person and keep calm',
      'Use short, simple sentences to communicate',
      'Encourage slow, deep breathing',
      'Help them focus on a specific object or mental image',
      'Remind them that the attack will pass'
    ]
  },
  {
    name: 'Acute Psychosis',
    category: 'Mental Health',
    title: 'A mental state characterized by a disconnection from reality.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Hallucinations',
      'Delusions',
      'Confused or disturbed thoughts',
      'Lack of insight and self-awareness',
      'Agitation or aggression'
    ],
    measures: [
      'Ensure your own safety first',
      'Speak calmly and clearly',
      'Do not argue with or challenge their beliefs',
      'Remove potential dangers from the environment',
      'Seek immediate professional help or call emergency services'
    ]
  },
  {
    name: 'Drowning',
    category: 'Environmental',
    title: 'Respiratory impairment from submersion or immersion in liquid.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Difficulty breathing or inability to breathe',
      'Coughing',
      'Chest pain',
      'Confusion',
      'Unconsciousness'
    ],
    measures: [
      'Remove the person from the water immediately',
      'Check for breathing and pulse',
      'If not breathing, begin CPR immediately',
      'If breathing, place in recovery position',
      'Keep the person warm and seek emergency medical care'
    ]
  },
  {
    name: 'Electric Shock',
    category: 'Environmental',
    title: 'Injury caused by exposure to electrical current.',
    image: 'Assets/asthma.jpg',
    symptoms: [
      'Burns at contact points',
      'Muscle pain and contractions',
      'Difficulty breathing',
      'Seizures',
      'Irregular heartbeat or cardiac arrest'
    ],
    measures: [
      'Do not touch the person if they are still in contact with the electrical source',
      'Turn off the power source if possible',
      'Once safe, check for breathing and pulse',
      'Begin CPR if necessary',
      'Treat burns and seek immediate medical attention'
    ]
  }
];
