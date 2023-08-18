interface Wave {
    point: number;
    vortex: number;
}

export class WaveTank {
  waves: Wave[] = [];
  waveLength: number = 100;
  tension: number = 0.02;
  damping: number = 0.02;
  spread: number = 0.02;

  constructor() {
    for (let wave: number = 0; wave < this.waveLength; wave++) {
      this.waves[wave] = {
        point: 0,
        vortex: 0,
      };
    }
  }

  update(waves: Wave[]) {
    for (const wave of waves) {
      const acceleration: number = -this.tension * wave.point - this.damping * wave.vortex;
      wave.point += wave.vortex;
      wave.vortex += acceleration;
    }
    this.setDeltas(waves);
  }

  setDeltas(waves: Wave[]) {
    for (let step: number = 0; step < 8; step++) {
      const { leftDeltas, rightDeltas } = this.getDeltasForWaves(waves);
      this.setWavesAccordingDeltas(waves, rightDeltas, leftDeltas);
    }
  }

  getDeltasForWaves(waves: Wave[]) {
    const leftDeltas: number[] = [];
    const rightDeltas: number[] = [];
    for (let wave: number = 0; wave < waves.length; wave++) {
      const prev: Wave = waves[(wave - 1 + waves.length) % waves.length];
      const next: Wave = waves[(wave + 1) % waves.length];
      leftDeltas[wave] = this.spread * (waves[wave].point - prev.point);
      rightDeltas[wave] = this.spread * (waves[wave].point - next.point);
    }
    return { leftDeltas, rightDeltas };
  }

  setWavesAccordingDeltas(waves: Wave[], rightDeltas: number[], leftDeltas: number[]) {
    for (let wave: number = 0; wave < waves.length; wave++) {
      const previousWave: Wave = waves[(wave - 1 + waves.length) % waves.length];
      const nextWave: Wave = waves[(wave + 1) % waves.length];
      previousWave.vortex += leftDeltas[wave];
      nextWave.vortex += rightDeltas[wave];
      previousWave.point += leftDeltas[wave];
      nextWave.point += rightDeltas[wave];
    }
  }

  getWavePoints(width: number, grid: number) {
    return [
      [0, this.waveLength],
      [0, 0],
      ...this.waves.map((wave: Wave, index: number) => [index * grid, wave.point]),
      [width, 0],
      [width, this.waveLength],
    ];
  }
}
