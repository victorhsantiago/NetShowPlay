import { Component, Input } from '@angular/core';
import { AlertService } from './alert.service';
import { Alert, AlertType } from './alert';

@Component({
    selector: 'ap-alert',
    templateUrl: './alert.component.html'
})

export class AlertComponent {

    @Input() timeout: 30000
    alert: Alert[] = []

    constructor(private alertService: AlertService) {
        this.alertService
            .getAlert()
            .subscribe(alert => {
                if (!alert) {
                    this.alert = []
                    return
                }
                this.alert.push(alert)
                setTimeout(() => this.removeAlert(alert), this.timeout)
            })
    }

    removeAlert(alertToRemove: Alert) {
        this.alert = this.alert.filter(alert => alert != alertToRemove)
    }

    getAlertClass(alert: Alert) {
        if (!alert) return ''

        switch (alert.alertType) {
            case AlertType.DANGER: return 'alert alert-danger'
            case AlertType.SUCCESS: return 'alert alert-success'
            case AlertType.WARNING: return 'alert alert-warnin'
            case AlertType.INFO: return 'alert alert-info'
        }
    }
}