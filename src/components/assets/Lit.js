// AIModelData.js

export const AIModelData = {
	systemPrompt:
		'Tez yazma konusunda yardımcı olan bir asistansın. Sana verilen konu doğrultusunda istenilen başlıklarda literatürü tarayarak metin oluşturursun. Oluşturduğun metinlerde internette yer alan yazıları aynı olacak şekilde yazmazsın. Bunun sebebi yazdığın metinlerde intihal olmaması gerekmektedir.\n\nLiteratüre uygun, sade, anlaşılır ve resmi bir dil ile mühendislik ve sağlık terminolojisini kullanarak metinler hazırlayacaksın.\n\nYazılan tez hakkında sana bilgiler verilecek ve "YAZMAYA BAŞLA" komutunu alana kadar herhangi bir metin yazmaya başlamayacaksın.\n\nLiteratür taraması yazman istenir ise aşağıdaki kuralları göz önünde bulundurarak literatür taramasını yazacaksın:\n1.İyi yapılandırılmış bir literatür taraması için benzer çalışmaları araştırın\n2. Literatür boşlukları ve teorilere yer verin\n3. Literatür taramanızı sistematik olarak organize edin\n4. Literatür taramasının kapsamını net olarak belirleyin\n5. Kaliteli bir literatür taraması için intihalden kaçının\n6. Kullandığınız dile dikkat edin\n',
	fewShotExamples: [
		{
			chatbotResponse:
				"Wadi ve Elmasry (2021) yapmış oldukları çalışmalarında, Weibull dağılımını kullanarak Çatalca, İstanbul bölgesinin rüzgar enerji potansiyelini hesaplamışlardır. Weibull dağılımının parametrelerinin hesabında ise grafik, moment, enerji pattern faktörü, ortalama standart sapma, güç yoğunluk yöntemleri ile genetik algoritma yöntemlerini kullanmışlardır. Parametre tahmin yöntemlerinin başarısını ise ortalama mutlak hata, ki-kare ve korelasyon katsayı yöntemleri ile incelemişlerdir. Çalışma sonuçlarına bakıldığında parametre hesap yöntemleri arasında çok fazla fark olmadığını gözlemlemişlerdir. Genetik algoritma ise en başarılı yöntem olarak tespit edilmiştir.",
			userInput:
				"Wadi, M. & Elmasry, W. (2021). Statistical analysis of wind energy potential using different estimation methods for Weibull parameters: a case study. Electrical Engineering, 10. doi: 10.1007/s00202-021-01254-0.",
		},
		{
			chatbotResponse:
				"Kang vd. (2021) yapmış oldukları çalışmalarında, Kore Cumhuriyeti’nin iki farklı bölgesinden aynı yükseklikte kaydedilen 10 yıllık rüzgar verisini, Weibull dağılımı kullanarak analiz etmişlerdir. Weibull dağılımının parametre hesabında ise on iki farklı yöntem kullanmışlardır. Parametre tahmin yöntemlerinin başarısını ise ortalama karekök hatası, belirleme katsayısı ve ki-kare hata yöntemleri yardımıyla analiz etmişlerdir. Analiz sonuçlarına göre Justus empirik, Lysen empirik ve moment yöntemleri başarılı olmuştur. Grafik, alternatif en yüksek olabilirlik, eşdeğer enerji ve enerji patern yöntemleri ise her iki bölge içinde en başarısız yöntemler olmuştur",
			userInput:
				"Kang, S., Khanjari, A., You, S. & Lee, J. (2021). Comparison of different statistical methods used to estimate Weibull parameters for wind speed contribution in nearby an offshore site, Republic of Korea. Energy Reports, 7, 7358-7373. doi: doi.org/10.1016/j.egyr.2021.10.078\n",
		},
		{
			chatbotResponse:
				"Xiaoyun vd. (2016) çalışmalarında, hava yoğunluğu, basınç, sıcaklık, rüzgâr yönü ve rüzgâr hızı verileri kullanarak LSTM ile 24 saati kapsayan 5 dakika zaman aralığında rüzgâr gücü tahmini yapmıştır. Farklı hiperparametreler denenmiş ve en iyi sonucu sırasıyla 300, 500 ve 200 nörona sahip 3 katmanlı ağı 100 iterasyonda eğiterek elde etmişlerdir. Karşılaştırma için sayısal hava verileri temel bileşen analizi ve LSTM modeli beraber kullanılmıştır. Hata metrikleri ile modellerin başarıları ölçüldüğünde temel bileşen analizi ile tasarlanan LSTM modeli daha başarılı olmuştur. Ayrıca bu model destek vektör makineleri ve geri yayılımlı yapay sinir ağı modelleri ile karşılaştırılmış ve önerilen model daha başarılı sonuç vermiştir.\n",
			userInput:
				"Xiaoyun, Q., Xiaoning, K., Chao, Z., Shuai, J. & Xiuda, M. (2016). Short-Term Prediction of Wind Power Based on Deep Long Short-Term Memory. In 2016 IEEE PES Asia-Pacific Power and Energy Engineering Conference (APPEEC). 25-28 October, Xi'an, 1148-1152. ",
		},
		{
			chatbotResponse:
				"Xiaoyun vd. (2016) çalışmalarında, hava yoğunluğu, basınç, sıcaklık, rüzgâr yönü ve rüzgâr hızı verileri kullanarak LSTM ile 24 saati kapsayan 5 dakika zaman aralığında rüzgâr gücü tahmini yapmıştır. Farklı hiperparametreler denenmiş ve en iyi sonucu sırasıyla 300, 500 ve 200 nörona sahip 3 katmanlı ağı 100 iterasyonda eğiterek elde etmişlerdir. Karşılaştırma için sayısal hava verileri temel bileşen analizi ve LSTM modeli beraber kullanılmıştır. Hata metrikleri ile modellerin başarıları ölçüldüğünde temel bileşen analizi ile tasarlanan LSTM modeli daha başarılı olmuştur. Ayrıca bu model destek vektör makineleri ve geri yayılımlı yapay sinir ağı modelleri ile karşılaştırılmış ve önerilen model daha başarılı sonuç vermiştir.\n",
			userInput:
				"Nawawi, S. W., Ahmad, M. N. & Osman, J. H. S. (2010). Real-time control of a two wheeled inverted pendulum mobile robot, World Academy of Science Engineering and Technology, 39, 214–220, doi:10.5772/10362",
		},
	],
	chatParameters: {
		deploymentName: "gpt4deploy",
		maxResponseLength: 4095,
		temperature: 0.7,
		topProbablities: 0.95,
		stopSequences: null,
		pastMessagesToInclude: 20,
		frequencyPenalty: 0,
		presencePenalty: 0,
	},
};

export default AIModelData;
