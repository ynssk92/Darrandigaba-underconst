/**
 * Subtle organic ambient sound generator using Web Audio API.
 * Synthesizes gentle desert garden chimes and soft breeze with zero external asset files.
 */
class OasisSoundPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private intervalId: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playGentleChime(freq = 528) {
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      // Soft pentatonic overtone decay
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + 1.2);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.05, this.ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 1.8);
    } catch {
      // AudioContext policy gracefully handled
    }
  }

  public toggleAmbient(onStateChange?: (playing: boolean) => void) {
    if (this.isPlaying) {
      this.isPlaying = false;
      if (this.intervalId) {
        window.clearInterval(this.intervalId);
        this.intervalId = null;
      }
      onStateChange?.(false);
    } else {
      this.isPlaying = true;
      this.playGentleChime(432);
      const frequencies = [432, 540, 648, 720, 864];
      this.intervalId = window.setInterval(() => {
        if (!this.isPlaying) return;
        const randomFreq = frequencies[Math.floor(Math.random() * frequencies.length)];
        this.playGentleChime(randomFreq);
      }, 3500);
      onStateChange?.(true);
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const oasisAudio = new OasisSoundPlayer();
