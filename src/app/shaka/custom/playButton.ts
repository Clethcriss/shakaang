import shaka from 'shaka-player/dist/shaka-player.ui.js';

export class PlayButton extends shaka.ui.Element {
  static Factory = class { create(rootElement, controls){
    return new PlayButton(rootElement, controls);
  }};
  // tslint:disable-next-line:variable-name
  button_: any;
  eventManager: any;
  parent: any;

  constructor(parent, controls) {
    super(parent, controls);
    this.parent = parent;
    this.button_ = document.createElement('button');
    // this class combined with the textContent specifies the look of the icon.
    this.button_.classList.add('material-icons-round');
    this.button_.textContent = 'play_arrow';
    this.parent.appendChild(this.button_);

    this.eventManager.listen(this.button_, 'click', () => {
      // controls.s = video element
      const paused = controls.s.paused;
      if (paused) {
        controls.s.play();
        this.button_.textContent = 'pause';
      } else {
        controls.s.pause();
        this.button_.textContent = 'play_arrow';
      }
    });
  }
}
