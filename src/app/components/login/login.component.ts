import { Component, OnInit } from '@angular/core';
import { Sonuc } from 'src/app/models/sonuc';
import { Uye } from 'src/app/models/uye';
import { DataService } from 'src/app/services/data.service';
import { MyToastService } from 'src/app/services/my-toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public dataServis: DataService,
    public toast: MyToastService
  ) { }

  ngOnInit() {
  }
  OturumAc(mail: string, parola: string) {
    this.dataServis.OturumAc(mail, parola).subscribe(d => {
      if (d.length > 0) {
        var kayit: Uye = d[0];
        localStorage.setItem("adsoyad", kayit.adsoyad);
        localStorage.setItem("admin", kayit.admin.toString());
        location.href = "/";
      } else {
        var s: Sonuc = new Sonuc();
        s.islem = false;
        s.mesaj = "E-Posta Adresi veya Parola Geçersizdir!";
        this.toast.ToastUygula(s);
      }
    });
  }
}