import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subscription, timer} from 'rxjs';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss']
})
export class CronometroComponent implements OnInit {

  @Input() minutes: number = 0;
  @Input() segundo: number = 0;
  @Output() markTime: EventEmitter<number> = new EventEmitter<number>();
  @Output() clearTimeLogs: EventEmitter<void> = new EventEmitter<void>();
  subscription: Subscription = new Subscription();
  timeInSeconds: number = 0;
  isPlaying: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.timeInSeconds = this.minutes * 60 + this.segundo;
  }

  play():void {
    this.isPlaying = true;
    this.subscription = timer(this.timeInSeconds, 1000)
      .subscribe(() => {
        this.timeInSeconds++;
      });
  }

  pause():void {
    this.isPlaying = false;
    this.subscription.unsubscribe();
  }

  stop():void {
    this.isPlaying = false;
    this.subscription.unsubscribe();
    this.timeInSeconds = 0;
    this.clearTimeLogs.emit();
  }

  registerTime():void {
    this.markTime.emit(this.timeInSeconds);
  }
}
