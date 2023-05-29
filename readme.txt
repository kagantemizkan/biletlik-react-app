Bilgisayarınızda node,mysql bulunmalı.
Mysql kurulumuuna bağlı olarak sıkıntı yaşanablir.
Yaşanırsa:
Mysql ınstaller açın ve mysql server yanında configore yazısına tıklayın
 Authentication method sekmesine gidin Legacy Authentication Method seçin ve düzenlemeyi yapın.

gerekli npm paketleri projeyle birlikte githubta olmalı ama yoksa packagejson içinde dependicies yazan kısımdaki paketleri kurun.


api klasörü içinde db.js dosyasında schema ismi sql serverın şifresini değiştirin.

mysqle data importla databasi alın

cd api npm start
cd client npm start