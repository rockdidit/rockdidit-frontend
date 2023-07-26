import { ContentInfoService } from './../../../services/content-service/content-info.service';
import { Component } from '@angular/core';

type blogsType = {
  title: string;
  date: string;
  text: string;
};


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogsArrs: blogsType[] = [
    {
      title: 'Türkiye’nin En İyi Online Bahis Şirketi',
      date: 'May 8, 2023',
      text: 'Content Bahis siteleri sunan Aviator Oyunu Mobil Olarak Nasıl Oynanır Aviator Mostbet adil oyun mu? Aviator oyunu hilesi taktikleri inanılmaz bir konudur Siber Yarış Oyunları Mostbet Bahis Şirketinin Avantajları: Mostbet',
    },
    {
      title: 'Mostbet Aviator en iyi crash oyunu ᐉ çarpışma oyunu Aviator',
      date: 'May 8, 2023',
      text: 'Content Kayıt ve yetkilendirme özellikleri Aviator Mostbet oyunundaki minimum bahis miktarı nedir? Casino ve bahis sitesi oyunu olan Aviator oyna What You Need to Start Playing Aviator on Mostbet Mostbet',
    },
    {
      title: 'Mostbet indir büyük bir önbellek kazanmak kadar kolay!',
      date: 'May 8, 2023',
      text: 'Content Web sitesinin mobil versiyonunun işlevselliğinin özellikleri Mostbet Uygulamasını Türkiye’de nasıl indirebilirim? MostBet mobil uygulaması MostBet’in mobil uygulamaları hakkında yorumlar Maksimum bonus değeri Casino MostBet MostBet’e kaydolun ve giriş yapın',
    },
    {
      title: 'Mostbet official site in india',
      date: 'May 8, 2023',
      text: 'Content Mostbet slot machines and slots MostBet Login Who is the owner of MostBet? Can the Philadelphia 66ers win the 2022-2023 NBA season? Birthday With Mostbet ???? Personal Mostbet Bangladesh',
    },
    {
      title: 'official Mostbet Affiliate contact',
      date: 'May 8, 2023',
      text: 'Content Mostbet Affiliate program, betting on sports and esports Why do publishers choose the mostbet affiliate network? Партнерская программа MostBet Partners MostBet Partners – Offers provided EARN WITH MOSTBET PARTNERS',
    },
    {
      title: 'Jogue online no jogo Aviator com a Mostbet',
      date: 'May 8, 2023',
      text: 'Content Six Sports What are the minimum and maximum betting sizes of Aviator at Mostbet? Aviator hack in Mostbet Spribe Aviator tricks and tips How to Play Aviator Crash Game',
    },
    {
      title: 'Мостбет официальный сайт, вход в личный кабинет Mostbet',
      date: 'May 7, 2023',
      text: 'Content Есть iOS приложение мостбет на айфон и как скачать? Рабочее приложение mostbet зеркало доступно всегда? Ссылки на актуальное зеркало Мостбет Мостбет играть на деньги Почему блокируют Мостбет? Mostbet —',
    },
    {
      title: 'Мостбет скачать бесплатно приложение на Андроид и IOS Mostbet',
      date: 'May 7, 2023',
      text: 'Content Зачем приложение mostbet? Приложение Mostbet для iOS Mostbet автоматы онлайн и слоты, дают возможность выиграть? Зачем зеркало официальное бк мостбет? Можно ли сделать ставки на спорт через мостбет? Как делать ставки? Есть',
    },
    {
      title:
        'Мостбет регистрация и вход на сайт БК Мостбет: регистрация с бонусом 30000, вход в личный кабинет игрока',
      date: 'May 7, 2023',
      text: 'Content Как найти зеркало сейчас и на сегодня сайта mostbet? Как удалить аккаунт в мостбет? Мостбет официальный сайт Mostbet Мостбет зеркало рабочее на сегодня Что такое зеркало официального сайта мостбет?',
    },
  ];
}
