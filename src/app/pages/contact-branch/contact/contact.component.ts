import { Component, OnInit } from '@angular/core';
import { ContentInfoService } from 'src/app/services/content-service/content-info.service';
type contactInformation = {
  info: string[] | string;
  title: string;
};
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactInformation?: Array<contactInformation>;

  constructor(private contentInfoService: ContentInfoService) {
    this.contactInformation;
    this.contentInfoService.getWebSiteInformation(8).then((data: any) => {
      try {
        if (data && data.data) {
          const response = data.data.attributes.content_JSON.contact;
          this.contactInformation = response;
        }
      } catch (err) {
        console.error(err);
      }
    });
  }
  ngAfterContentChecked(): void {
    if (this.contactInformation && this.contactInformation.length > 0) {
      this.contactInformation?.filter(
        (contact: any, index: number) => index === 0
      ).map((item) => {
        if(typeof item.info === 'string') {
          item.info = item.info.split(',');
        }
      })
    }
  }
}
