export class WaveTank {
  waves = [];
  waveLength = 100;
  tension = 0.02;
  damping = 0.02;
  spread = 0.02;

  constructor() {
    for (let wave = 0; wave < this.waveLength; wave++) {
      this.waves[wave] = {
        point: 0,
        vortex: 0,
      };
    }
  }

  update(waves) {
    for (const wave of waves) {
      const acceleration = -this.tension * wave.point - this.damping * wave.vortex;
      wave.point += wave.vortex;
      wave.vortex += acceleration;
    }
    this.setDeltas(waves);
  }

  setDeltas(waves) {
    for (let step = 0; step < 8; step++) {
      const {leftDeltas, rightDeltas} = this.getDeltasForWaves(waves);
      this.setWavesAccordingDeltas(waves, rightDeltas, leftDeltas);
    }
  }

  getDeltasForWaves(waves) {
    const leftDeltas = [];
    const rightDeltas = [];
    for (let wave = 0; wave < waves.length; wave++) {
      const prev = waves[(wave - 1 + waves.length) % waves.length];
      const next = waves[(wave + 1) % waves.length];
      leftDeltas[wave] = this.spread * (waves[wave].point - prev.point);
      rightDeltas[wave] = this.spread * (waves[wave].point - next.point);
    }
    return {leftDeltas, rightDeltas};
  }

  setWavesAccordingDeltas(waves, rightDeltas, leftDeltas) {
    for (let wave = 0; wave < waves.length; wave++) {
      const previousWave = waves[(wave - 1 + waves.length) % waves.length];
      const nextWave = waves[(wave + 1) % waves.length];
      previousWave.vortex += leftDeltas[wave];
      nextWave.vortex += rightDeltas[wave];
      previousWave.point += leftDeltas[wave];
      nextWave.point += rightDeltas[wave];
    }
  }

  getWavePoints(width, grid) {
    return [
        [0, this.waveLength],
        [0, 0],
        ...this.waves.map((wave, index) => [index * grid, wave.point]),
        [width, 0],
        [width, this.waveLength],
      ];
  }
}
