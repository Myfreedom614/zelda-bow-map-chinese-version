// 以下数据由 NyKO 整理, QQ:7289775

var ShrinesVideo = (function () {
    var shrines = "\
http://www.tudou.com/programs/view/Kkn7AzFHUuA/|Korgu Chideh Shrine\r\n\
http://www.tudou.com/programs/view/fKRjAeWNMEo/|Chaas Qeta Shrine\r\n\
http://www.tudou.com/programs/view/YbUADTnXMZQ/|Tahno O'ah Shrine\r\n\
http://www.tudou.com/programs/view/WvWgHAg-Hvw/|Shai Yota Shrine\r\n\
http://www.tudou.com/programs/view/CCoIgm-NJSI/|Ke'nai Shakah Shrine\r\n\
http://www.tudou.com/programs/view/TKoIsYY4pmU/|Kah Mael Shrine\r\n\
http://www.tudou.com/programs/view/Kuy_nfKYNQA/|Ritaag Zumo Shrine\r\n\
http://www.tudou.com/programs/view/LLyRosEQnfI/|Katosa Aug Shrine\r\n\
http://www.tudou.com/programs/view/c_TMybd18y4/|Tu Ka'loh Shrine\r\n\
http://www.tudou.com/programs/view/i9Cft9Dw3pU/|Kah Yah Shrine\r\n\
http://www.tudou.com/programs/view/Zf5eFylosAY/|Muwo Jeem Shrine\r\n\
http://www.tudou.com/programs/view/jXFNM0TJbQ4/|Myahm Agana Shrine\r\n\
http://www.tudou.com/programs/view/ZA0CJNOv9QM/|Jitan Sa'mi Shrine\r\n\
http://www.tudou.com/programs/view/TfOW4qcH8zw/|Rucco Maag Shrine\r\n\
http://www.tudou.com/programs/view/Py4Nohe0SiI/|Dagah Keek Shrine\r\n\
http://www.tudou.com/programs/view/SjdbK-CATLI/|Ne'ez Yohma Shrine\r\n\
http://www.tudou.com/programs/view/Rdqr22I0gOU/|Ze Kasho Shrine\r\n\
http://www.tudou.com/programs/view/OlbApXgWVvg/|Dah Hesho Shrine\r\n\
http://www.tudou.com/programs/view/s5hTZ8JDaZg/|Tutsuwa Nima Shrine\r\n\
http://www.tudou.com/programs/view/p5LqRGyqKBE/|Zuna Kai Shrine\r\n\
http://www.tudou.com/programs/view/2Fs_f4asQsI/|Qukah Nata Shrine\r\n\
http://www.tudou.com/programs/view/tFUUX1TXYag/|Yah Rin Shrine\r\n\
http://www.tudou.com/programs/view/4ny0mRr3A7E/|Tawa Jinn Shrine\r\n\
http://www.tudou.com/programs/view/M05bzW93N3g/|Kam Urog Shrine\r\n\
http://www.tudou.com/programs/view/qLahPJRfxM/|Dow Na'eh Shrine\r\n\
http://www.tudou.com/programs/view/20uBirGAHa8/|Mezza Lo Shrine\r\n\
http://www.tudou.com/programs/view/49td69SBWto/|Lakna Rokee Shrine\r\n\
http://www.tudou.com/programs/view/TKOWGfUV1Ko/|Soh Kofi Shrine\r\n\
http://www.tudou.com/programs/view/ptxAONvkNnE/|Tah Muhl Shrine\r\n\
http://www.tudou.com/programs/view/Pm9vV_xH6Qw/|Sah Dahaj Shrine\r\n\
http://www.tudou.com/programs/view/CyiSVgPo1PI/|Mo'a Keet Shrine\r\n\
http://www.tudou.com/programs/view/SXcxCP0tBug/|Kayra Mah Shrine\r\n\
http://www.tudou.com/programs/view/BzgxSXzD-Jo/|Daqa Koth Shrine\r\n\
http://www.tudou.com/programs/view/cGZ6Y2ggckE/|Gorae Torr Shrine\r\n\
http://www.tudou.com/programs/view/zDCN9xby340/|Shai Utoh Shrine\r\n\
http://www.tudou.com/programs/view/NSbT4LqbwqM/|Shoda Sah Shrine\r\n\
http://www.tudou.com/programs/view/6L1M6-fBK6g/|Toto Sah Shrine\r\n\
http://www.tudou.com/programs/view/OvsyhgG3Mis/|Ree Dahee Shrine\r\n\
http://www.tudou.com/programs/view/YzqlVVfvDD0/|Ha Dahamar Shrine\r\n\
./Content/Image/Shee.jpg|Shee Vaneer Shrine\r\n\
./Content/Image/Shee.jpg|Shee Venath Shrine\r\n\
http://www.tudou.com/programs/view/yYV3AnNPNZQ/|Ta'log Naeg Shrine\r\n\
http://www.tudou.com/programs/view/L3VmsJ_9gWk/|Daka Tuss Shrine\r\n\
http://www.tudou.com/programs/view/I2ScJJeWCIQ/|Sheh Rata Shrine\r\n\
http://www.tudou.com/programs/view/KlCFRGoLjks/|Qua Raym Shrine\r\n\
http://www.tudou.com/programs/view/WmZNEVVP9mM/|Mirro Shaz Shrine\r\n\
http://www.tudou.com/programs/view/GgcaQaG_XeM/|Shae Mo'sah Shrine\r\n\
http://www.tudou.com/programs/view/8FFiUAqKY9k/|Shora Hah Shrine\r\n\
http://www.tudou.com/programs/view/sVmuXox40J4/|Shoqa Tatone Shrine\r\n\
http://www.tudou.com/programs/view/eMS5_ZpZzJg/|Ka'o Makagh Shrine\r\n\
http://www.tudou.com/programs/view/mt0CbhXZcyY/|Shae Katha Shrine\r\n\
http://www.tudou.com/programs/view/vQg_1YlhSWM/|Pumaag Nitae Shrine\r\n\
http://www.tudou.com/programs/view/J8Tnl6J4Ew4/|Bosh Kala Shrine\r\n\
http://www.tudou.com/programs/view/-NOo7iPuCzI/|Wahgo Katta Shrine\r\n\
http://www.tudou.com/programs/view/YaRTrV4ttMg/|Hila Rao Shrine\r\n\
http://www.tudou.com/programs/view/4LeGrMntmAQ/|Kaya Wan Shrine\r\n\
http://www.tudou.com/programs/view/qVUpt0EkJig/|Namika Ozz Shrine\r\n\
http://www.tudou.com/programs/view/ayun0aN0YG0/|Kuhn Sidajj Shrine\r\n\
http://www.tudou.com/programs/view/XFyLUVMjTOA/|Maag Halan Shrine\r\n\
http://www.tudou.com/programs/view/0ZjI2k6ZDW8/|Keo Ruug Shrine\r\n\
http://www.tudou.com/programs/view/y7RoZPJZFxQ/|Ketoh Wawai Shrine\r\n\
http://www.tudou.com/programs/view/ldmt4j6_Pjk|Ishto Soh Shrine\r\n\
http://www.tudou.com/programs/view/JSwWT4ZO4Ng/|Ya Naga Shrine\r\n\
http://www.tudou.com/programs/view/gfn467Y7q-8/|Owa Daim Shrine\r\n\
http://www.tudou.com/programs/view/bBrt1X1SOlg/|Oman Au Shrine\r\n\
http://www.tudou.com/programs/view/BKNAqgSa1BU/|Ja Baij Shrine\r\n\
http://www.tudou.com/programs/view/tL4_8i28HFk/|Kaam Ya'tak Shrine\r\n\
http://www.tudou.com/programs/view/mHiV2PTsm28/|Katah Chuki Shrine\r\n\
http://www.tudou.com/programs/view/dtqz0JPFRHE/|Noya Neha Shrine\r\n\
http://www.tudou.com/programs/view/08mB_PG2m5k/|Saas Ko'sah Shrine\r\n\
http://www.tudou.com/programs/view/h3WCs-xt4K0/|Daag Chokah Shrine\r\n\
http://www.tudou.com/programs/view/sqN4QKu6BXU/|Qaza Tokki Shrine\r\n\
http://www.tudou.com/programs/view/GygyIFypLPw/|Dila Maag Shrine\r\n\
http://www.tudou.com/programs/view/56fwJSwnX_U/|Suma Sahma Shrine\r\n\
http://www.tudou.com/programs/view/rNBV0Aa6h94/|Jee Noh Shrine\r\n\
http://www.tudou.com/programs/view/X_dtFLImWSc|Keh Namut Shrine\r\n\
http://www.tudou.com/programs/view/OlbApXgWVvg/|Dah Kaso Shrine\r\n\
http://www.tudou.com/programs/view/55e_cA-tJk0/|Rota Ooh Shrine\r\n\
http://www.tudou.com/programs/view/7c5wAKo1zSc/|Sheem Dagoze Shrine\r\n\
http://www.tudou.com/programs/view/y3xUCWgmuEI/|Zalta Wa Shrine\r\n\
http://www.tudou.com/programs/view/TXVLO1BPm0k/|Monya Toma Shrine\r\n\
http://www.tudou.com/programs/view/WOvwmGmzJGU/|Maag No'rah Shrine\r\n\
http://www.tudou.com/programs/view/A7DpRNKt8mM/|Rona Kachta Shrine\r\n\
http://www.tudou.com/programs/view/UOgISlVzyV8/|Rin Oyaa Shrine\r\n\
http://www.tudou.com/programs/view/k7n8o2tTVw4/|Sha Gehma Shrine\r\n\
http://www.tudou.com/programs/view/qF7OFGZAqi8|Misae Suma Shrine\r\n\
http://www.tudou.com/programs/view/SD6eyygzNcE/|Korsh O'hu Shrine\r\n\
http://www.tudou.com/programs/view/70vwR_ebD8s/|Kay Noh Shrine\r\n\
http://www.tudou.com/programs/view/Jbf268DV2hg/|Joloo Nah Shrine\r\n\
http://www.tudou.com/programs/view/FTcI13k2Az4/|Mijah Rokee Shrine\r\n\
http://www.tudou.com/programs/view/AWxGrKQOYxA/|Mogg Latan Shrine\r\n\
http://www.tudou.com/programs/view/8wdgNzjHJxo/|Toh Yahsa Shrine\r\n\
http://www.tudou.com/programs/view/5gMDj6VECPc/|Shae Loya Shrine\r\n\
http://www.tudou.com/programs/view/N480G8XBIek/|Dunba Taag Shrine\r\n\
http://www.tudou.com/programs/view/pm8QkB2FKBg/|Goma Asaagh Shrine\r\n\
http://www.tudou.com/programs/view/G10y6_wbm80/|Gee Ha'rah Shrine\r\n\
http://www.tudou.com/programs/view/MKk1CdA5-xY/|Lanno Kooh Shrine\r\n\
http://www.tudou.com/programs/view/eBiLHKgEBuU/|Rok Uwog Shrine\r\n\
http://www.tudou.com/programs/view/vWpV88AKa2Q|Shada Naw Shrine\r\n\
http://www.tudou.com/programs/view/H76AMS-wyw4|Raqa Zunzo Shrine\r\n\
http://www.tudou.com/programs/view/cdDw3YKnUfE|Daqo Chisay Shrine\r\n\
http://www.tudou.com/programs/view/c4hKxbK0b0o/|Dako Tah Shrine\r\n\
http://www.tudou.com/programs/view/hwcYknD5BtY/|Sasa Kai Shrine\r\n\
http://www.tudou.com/programs/view/H5xZGzl-gpg|Sho Dantu Shrine\r\n\
http://www.tudou.com/programs/view/JcMT1gfi7hY/|Kuh Takkar Shrine\r\n\
http://www.tudou.com/programs/view/bH9ZDgerUBM|Keeha Yoog Shrine\r\n\
http://www.tudou.com/programs/view/X6oE7YJeaN8|Tena Ko'sah Shrine\r\n\
http://www.tudou.com/programs/view/Hatpct8ahs0|Bareeda Naag Shrine\r\n\
http://www.tudou.com/programs/view/RxWJZue02nQ|Akh Va'quot Shrine\r\n\
http://www.tudou.com/programs/view/My3AvxzoDm0|Sha Warvo Shrine\r\n\
http://www.tudou.com/programs/view/ujUN8BJ1BxY|Mozo Shenno Shrine\r\n\
http://www.tudou.com/programs/view/v7lgGcTLrC4|Hawa Koth Shrine\r\n\
http://www.tudou.com/programs/view/g5w3Apm8VjM|Tho Kayu Shrine\r\n\
http://www.tudou.com/programs/view/Na1BCDvyZhs|Kema Zoos Shrine\r\n\
http://www.tudou.com/programs/view/-OoVoFEM7-4|Kema Kosassa Shrine\r\n\
http://www.tudou.com/programs/view/Cxkl5jF040A|Kah Okeo Shrine\r\n\
http://www.tudou.com/programs/view/e_uDWobafYg|Voo Lota Shrine\r\n\
http://www.tudou.com/programs/view/0eztdovaNg0|Maka Rah Shrine\r\n\
http://www.tudou.com/programs/view/ecxVAHSK65M|Hia Miu Shrine\r\n\
http://www.tudou.com/programs/view/aei-YYNjHWQ|To Quomo Shrine\r\n\
".split("\r\n");
    var result = {};
    for (var i = 0; i < shrines.length; i++) {
        if (!shrines[i]) continue;
        var shrine = shrines[i].split("|");
        if (!result[shrine[1]]) {
            result[shrine[1]] = shrine[0];
        } else {
            console.log("same shrine in English: " + shrine[1]);
        }
    }
    return result;
})();

