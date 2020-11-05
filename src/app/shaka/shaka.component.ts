import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import shaka from 'shaka-player/dist/shaka-player.ui.js';
import 'shaka-player/dist/controls.css';

@Component({
  selector: 'app-shaka',
  templateUrl: './shaka.component.html',
  styleUrls: ['./shaka.component.css']
})
export class ShakaComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer') videoElementRef: ElementRef;
  videoElement: HTMLVideoElement;
  @ViewChild('videoContainer') videoContainerElementRef: ElementRef;
  videoContainerElement: HTMLElement;

  manifestUri = 'http://dash.edgesuite.net/envivio/EnvivioDash3/manifest.mpd';
  constructor() { }

  ngOnInit(): void {
    console.log('hehe');
  }

  ngAfterViewInit(): void {
    this.videoElement = this.videoElementRef.nativeElement;
    this.videoContainerElement = this.videoContainerElementRef.nativeElement;
    this.initPlayer();
  }

  private initPlayer(): void {
    const player = new shaka.Player(this.videoElement);

    const uiConfig: any = {};

    uiConfig.controlPanelElements = ['play_pause', 'mute', 'volume', 'time_duration', 'fullscreen', 'overflow_menu'];
    const ui: any = new shaka.ui.Overlay(player, this.videoContainerElement, this.videoElement);

    ui.configure(uiConfig);
    ui.getControls();

    player.addEventListener('error', this.onError);
    player.load(this.manifestUri).then(() => {
      console.log('Loaded!');
    }).catch(this.onError);
  }

  private onErrorEvent(event): void {
    // Extract the shaka.util.Error object from the event.
    this.onError(event.detail);
  }

  private onError(error): void {
    // Log the error
    console.error('Error code', error.code, 'object', error);
  }

}
