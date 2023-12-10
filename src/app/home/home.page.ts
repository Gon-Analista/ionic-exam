import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  isDesktop: boolean | undefined;
  @ViewChild('logAnim', { read: ElementRef }) logAnim!: ElementRef;
  private animation!: Animation;

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.logAnim.nativeElement)
      .fill('both')
      .duration(1500)
      .keyframes([
        { offset: 0,  opacity: '0' },
        { offset: 0.2, opacity: '0.1' },
        { offset: 0.4, opacity: '0.4' },
        { offset: 0.7,  opacity: '0.6' },
        { offset: 0.9,  opacity: '0.9',transform: 'scale(1.1)' },
        { offset: 1,  opacity: '1', transform: 'scale(1)' },
      ]);
    this.animation.play();
  }

  constructor(private platform: Platform,private animationCtrl: AnimationController) { }

  ngOnInit() {
    this.checkPlatform();
  }

  checkPlatform() {
    this.isDesktop = this.platform.is('desktop');
  }

  downloadApp() {
    window.location.href =
      'https://www.dropbox.com/scl/fi/vd1p8fw4yv0etofhev8m2/registrapp-master-e488d2-release.apk?rlkey=wa7o7s0xgjslrtqf6cwd4r613&dl=0';
  }

}
