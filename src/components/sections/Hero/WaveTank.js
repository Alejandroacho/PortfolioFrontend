export class WaveTank {
  waves = [];
  waveLength = 100;
  k = 0.02;
  damping = 0.02;
  spread = 0.02;

  constructor() {
    for (let i = 0; i < this.waveLength; i++) {
      this.waves[i] = {
        p: 0,
        v: 0,
      };
    }
  }

  update(waves) {
    for (const i of waves) {
      const a = -this.k * i.p - this.damping * i.v;
      i.p += i.v;
      i.v += a;
    }

    const leftDeltas = [];
    const rightDeltas = [];

    for (let t = 0; t < 8; t++) {
      for (let i = 0; i < waves.length; i++) {
        const prev = waves[(i - 1 + waves.length) % waves.length];
        const next = waves[(i + 1) % waves.length];
        leftDeltas[i] = this.spread * (waves[i].p - prev.p);
        rightDeltas[i] = this.spread * (waves[i].p - next.p);
      }

      for (let i = 0; i < waves.length; i++) {
        const prev = waves[(i - 1 + waves.length) % waves.length];
        const next = waves[(i + 1) % waves.length];
        prev.v += leftDeltas[i];
        next.v += rightDeltas[i];
        prev.p += leftDeltas[i];
        next.p += rightDeltas[i];
      }
    }
  }
}
