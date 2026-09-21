window.BTL = {
  contact: {
    email: "info@btlsh.com",
    phones: ["+86 138 1798 2518", "+86 137 9548 7950"],
    address: "Building C, No. 888, Huanhu West 2nd Road, Lingang New Area, Shanghai Pilot Free Trade Zone, China",
    whatsapp: ""
  },
  products: [
    {
      slug: "voltage-stabilizers",
      name: "Industrial Voltage Stabilizers",
      series: "SCR / TCR / SDR / TDR / Contactless Series",
      category: "Power Regulation",
      image: "assets/images/web/stabilizer-source.webp",
      short: "Automatic voltage regulation for sensitive industrial loads under unstable grid conditions.",
      description: "Built for continuous industrial duty, Botley voltage stabilizers automatically correct grid fluctuation while maintaining a clean, stable output for production equipment.",
      applications: ["CNC machinery", "Printing lines", "Medical equipment", "Industrial automation"],
      features: ["Automatic voltage regulation", "Overvoltage, overcurrent, phase-loss and phase-sequence protection", "High efficiency with low waveform distortion", "Manual and automatic operation modes"],
      specs: { "Capacity range": "3-3000 kVA, configuration dependent", "Input": "Single- or three-phase, engineered to grid conditions", "Output accuracy": "Typically ±3%; configurable by series", "Frequency": "50/60 Hz", "Efficiency": "Up to 98-99% by series" },
      custom: "Input range, output voltage, protection logic, cabinet format and bypass options can be engineered to project requirements.",
      related: ["cnc", "printing", "medical"]
    },
    {
      slug: "dry-type-transformers",
      name: "Three-phase Dry-type Transformers",
      series: "SG / OSG Series",
      category: "Voltage Conversion",
      image: "assets/images/web/transformer-source.webp",
      short: "Custom isolation and voltage conversion from 1 to 2000 kVA for industrial power systems.",
      description: "SG/OSG dry-type transformers support safe voltage conversion and electrical isolation across a wide range of industrial applications, with winding and enclosure options tailored to the installation.",
      applications: ["Imported machinery", "Production lines", "Control systems", "OEM equipment"],
      features: ["Fire-resistant dry-type construction", "Custom primary and secondary voltages", "Optional enclosure and winding arrangements", "Low maintenance and dependable operation"],
      specs: { "Capacity range": "1-2000 kVA", "Input voltage": "Rated voltage ±5%; project-specific", "Output voltage": "Rated voltage ±5% at no load", "Frequency": "50/60 Hz", "Efficiency": "≥98%", "Insulation resistance": "≥2 MΩ" },
      custom: "Voltage ratio, vector group, taps, winding allocation, enclosure and environmental requirements are available to order.",
      related: ["cnc", "research", "export"]
    },
    {
      slug: "stabilizer-transformer",
      name: "Stabilizer / Transformer Integrated Systems",
      series: "SBW / SG Series",
      category: "Integrated Power",
      image: "assets/images/web/integrated-source.webp",
      short: "Voltage conversion and automatic stabilization in one coordinated cabinet for imported equipment.",
      description: "The integrated SBW/SG system converts local grid voltage and automatically stabilizes the output, simplifying installation for imported production equipment.",
      applications: ["Imported machine tools", "Automated production", "Packaging lines", "High-value process equipment"],
      features: ["Integrated transformation and regulation", "Broad load compatibility", "Automatic protection functions", "Continuous-duty construction"],
      specs: { "Capacity range": "20-500 kVA", "Input voltage": "304-456 V, three-phase", "Output voltage": "200/220 V ±3%; customizable", "Frequency": "50/60 Hz", "Efficiency": "≥98%", "Waveform distortion": "≤0.1%" },
      custom: "Output voltage, capacity, regulation accuracy, protection and cabinet arrangement can be matched to the imported machine.",
      related: ["cnc", "printing", "medical"]
    },
    {
      slug: "frequency-converters",
      name: "AC Frequency Converters",
      series: "AFC Series",
      category: "Power Conversion",
      image: "assets/images/web/frequency-source.webp",
      short: "Programmable voltage and frequency for export-product testing and 60 Hz imported equipment.",
      description: "Botley frequency converters recreate international grid conditions with adjustable voltage and frequency, enabling export-product testing, burn-in and dependable operation of imported equipment.",
      applications: ["Export appliance testing", "Laboratory validation", "60 Hz imported equipment", "Production burn-in"],
      features: ["Digitally adjustable voltage and frequency", "IGBT/SPWM conversion architecture", "Fast dynamic response", "Integrated overvoltage, overload and short-circuit protection"],
      specs: { "Input": "3Φ4W 380 V ±15% or 1Φ2W 220 V ±15%", "Output voltage": "0-500 V line / 0-300 V phase, adjustable", "Output frequency": "47-63 Hz adjustable; fixed-frequency options", "Frequency stability": "≤0.01%", "Response time": "2 ms", "THD": "≤1%" },
      custom: "Input/output phase format, voltage, frequency range, capacity and interfaces can be selected for the test program.",
      related: ["research", "export"]
    },
    {
      slug: "ups-systems",
      name: "Online UPS Systems",
      series: "UPS 1-300 kVA",
      category: "Backup Power",
      image: "assets/images/web/ups-source.webp",
      short: "Zero-transfer-time conditioned power for critical equipment and continuous operations.",
      description: "Online UPS systems protect critical loads against outages, undervoltage and overvoltage while supplying regulated, pure-sine-wave output from mains or battery.",
      applications: ["Medical systems", "Telecommunications", "Broadcast infrastructure", "Control and data systems"],
      features: ["0 ms transfer time", "Intelligent battery management", "Automatic bypass and recovery", "Pure sine wave output"],
      specs: { "Capacity range": "1-300 kVA", "Input": "220 V ±25% or 380 V ±20%", "Output regulation": "220 V ±0.5% or 380 V ±1%", "Frequency": "50/60 Hz ±10% input tolerance", "Efficiency": "≥95%", "Battery": "Sealed maintenance-free lead-acid or gel" },
      custom: "Runtime, battery cabinet, phase configuration, monitoring and bypass arrangements can be engineered for the load profile.",
      related: ["medical", "telecom", "research"]
    },
    {
      slug: "harmonic-filters",
      name: "Harmonic Filter Systems",
      series: "Engineered Passive Filter Cabinets",
      category: "Power Quality",
      image: "assets/images/web/harmonic-source.webp",
      short: "Engineered harmonic mitigation and reactive power compensation for nonlinear industrial loads.",
      description: "Harmonic filter cabinets combine tuned reactors, capacitors, control and protection to divert targeted harmonic currents and improve system power quality.",
      applications: ["Variable-speed drives", "Industrial rectifiers", "Automated plants", "Power distribution rooms"],
      features: ["Project-specific tuned filtering", "Automatic switching by load condition", "Reactive power compensation", "Multi-parameter electrical display"],
      specs: { "System voltage": "220-1100 V", "Fundamental frequency": "50/60 Hz", "Output per phase": "60-360 kVA", "Target harmonics": "3rd, 5th, 7th, 11th, 13th and project-specific", "Protection degree": "IP20 standard", "Reference standards": "IEEE 519; GB/T 14549" },
      custom: "Each system is sized from the site's load data and harmonic survey to balance filtering performance and reactive compensation.",
      related: ["cnc", "printing", "telecom"]
    },
    {
      slug: "plg-bypass-cabinets",
      name: "PLG Bypass Cabinets",
      series: "PLG Series",
      category: "System Continuity",
      image: "assets/images/web/bypass-source.webp",
      short: "A stable, protected maintenance bypass path designed around UPS operating requirements.",
      description: "PLG cabinets provide a coordinated backup mains bypass for UPS installations, integrating isolation, regulation, protection and optional manual bypass functions.",
      applications: ["UPS maintenance bypass", "Critical process loads", "Telecom power rooms", "Continuous manufacturing"],
      features: ["Stable regulated output", "Comprehensive fault protection", "Optional manual bypass", "Designed for maintainability"],
      specs: { "Capacity": "10-220 kVA three-phase; 10-150 kVA single-phase", "Input": "380 V ±15% three-phase or 220 V ±15% single-phase", "Output": "380 V three-phase or 220 V single-phase", "Frequency": "50/60 Hz ±2%", "Noise": "<55 dB", "Relative humidity": "20-90%" },
      custom: "Transformer arrangement, manual bypass, backstop diode, transmitter and protection settings are available by application.",
      related: ["telecom", "medical", "research"]
    }
  ]
};
