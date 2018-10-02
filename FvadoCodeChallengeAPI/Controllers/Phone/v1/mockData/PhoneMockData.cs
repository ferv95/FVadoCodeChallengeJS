using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeChallengeFVado.API.Phone.v1.mockData
{
    public static class PhoneMockData
    {

        public static IEnumerable<PhoneModel> GetMockPhones()
        {
            List<PhoneModel> phoneData = new List<PhoneModel>();

            phoneData.Add(new PhoneModel
            {
                ID = "iphonex",
                Brand = "iPhone",
                Model = "X",
                Description = "iPhone X (Roman numeral \"X\" pronounced \"ten\")" +
                " is a smartphone that was designed, developed, and marketed by Apple Inc. " +
                "It is the eleventh generation of the iPhone. It was announced on September 12, 2017, " +
                "alongside the iPhone 8 and iPhone 8 Plus, at the Steve Jobs Theater in the Apple Park campus. " +
                "The phone was released on November 3, 2017, so this device marks the iPhone series' tenth anniversary.",
                Color = "Silver",
                ImgURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/IPhone_X_vector.svg/330px-IPhone_X_vector.svg.png",
                Price = 999,
            });

            phoneData.Add(new PhoneModel
            {
                ID = "xiaomiredminote5",
                Brand = "Xiaomi",
                Model = "Redmi 5",
                Description = "Xiaomi Redmi 5 and Xiaomi Redmi 5 Plus (Redmi Note 5 in India) are smartphones developed by Xiaomi Inc, " +
                "announced on December the 7th, 2017. They are part of Xiaomi's budget Redmi smartphone line. " +
                "Redmi 5 Plus has been rebranded as Redmi Note 5 for Indian market.",
                Color = "Black",
                ImgURL = "https://www.miespaña.com/9534-large_default/xiaomi-redmi-note-5-4gb64gb-negro.jpg",
                Price = 180,
            });

            phoneData.Add(new PhoneModel
            {
                ID="xiaomimimix2",
                Brand = "Xiaomi",
                Model = "Mi Mix 2",
                Description = "Xiaomi Mi MIX 2 is an Android phablet manufactured by Xiaomi." +
                " It was first announced and released in China in September 2017 and later was launched in India at an event in Delhi on 10 October 2017." +
                " It is the successor to the Xiaomi Mi MIX. The ceramic body was designed by Philippe Starck.",
                Color = "Ceramic Black",
                ImgURL = "https://d2giyh01gjb6fi.cloudfront.net/default/0001/88/thumb_87444_default_big.png",
                Price = 379,
            });

            phoneData.Add(new PhoneModel
            {
                ID = "samsunggalaxys9",
                Brand = "Samsung",
                Model = "Galaxy S9",
                Description = "The Samsung Galaxy S9 and Samsung Galaxy S9+ (shortened to S9 and S9+, respectively) " +
                "are Android smartphones produced by Samsung Electronics as part of the Samsung Galaxy S series. " +
                "The devices were revealed at the Mobile World Congress in Barcelona on 25 February 2018, " +
                "as the successors to the Samsung Galaxy S8 and S8+.",
                Color = "Black",
                ImgURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Samsung_Galaxy_S9_and_S9_Plus.png/375px-Samsung_Galaxy_S9_and_S9_Plus.png",
                Price = 720,
            });

            phoneData.Add(new PhoneModel
            {
                ID = "xiaomipocophonef1",
                Brand = "Xiaomi",
                Model = "Pocophone F1",
                Description = "Xiaomi Pocophone F1 was launched in August 2018 & runs on Android 8.1 OS. " +
                "The Smartphone is available in three color options i.e. Graphite Black, " +
                "Steel Blue, Red & has a built in fingerprint sensor as the primary security feature, " +
                "along with the host of connectivity options in terms of 3G, 4G, GPS, Wifi Bluetooth capabilities. " +
                "The phone is available with 64 GB of internal storage.",
                Color = "Blue",
                ImgURL = "https://i01.appmifile.com/webfile/globalimg/products/pc/pocophone/version-grey.png",
                Price = 329,
            });

            phoneData.Add(new PhoneModel
            {
                ID = "razerphone",
                Brand = "Razer",
                Model = "Phone",
                Description = "The Razer Phone is an Android smartphone designed and developed by Razer Inc. that went on sale on 15 November, 2017." +
                " The device is designed mainly for gamers, although reviewers have noted that it is also good enough for everyday use.",
                Color = "Black",
                ImgURL = "https://www.howardforums.com/attachment.php?attachmentid=154905&d=1509622222",
                Price = 699,
            });

            return phoneData;

        }

    }
}
