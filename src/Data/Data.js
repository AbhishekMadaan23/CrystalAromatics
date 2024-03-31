const EssentialOilData = [
  {
    id: 1,
    essentialName: "Ambrette Seed Oil",
    botanicalName: "(Abelmoschus moschatus)",
    uses: "Used in perfumery as a fixative and fragrance enhancer. In aromatherapy, it's believed to have relaxing and aphrodisiac properties.",
  },
  {
    id: 2,
    essentialName: "Ajowain Oil",
    botanicalName: "(Trachyspermum ammi L)",
    uses: "Commonly used in Indian cuisine for its flavor and digestive properties. In aromatherapy, it's used for its calming effects on the mind and body.",
  },
  {
    id: 3,
    essentialName: "Aniseed Oil",
    botanicalName: "(Pimpinella anisum L)",
    uses: "Used in flavoring foods and beverages, especially in liquors like absinthe. In aromatherapy, it's believed to aid digestion and relieve stress.",
  },
  {
    id: 4,
    essentialName: "Angelica Root Oil",
    botanicalName: "(Angelica archangelica)",
    uses: "Historically used in herbal medicine for its diuretic and expectorant properties. In aromatherapy, it's believed to promote feelings of stability and protection.",
  },
  {
    id: 5,
    essentialName: "Amyris Oil",
    botanicalName: "(Amyris balsamifera)",
    uses: "Used in perfumery as a base note for its woody and balsamic scent. In aromatherapy, it's believed to have calming and grounding effects.",
  },
  {
    id: 6,
    essentialName: "Asafoetida Oil",
    botanicalName: "(Ferula Asafoetida)",
    uses: "Commonly used as a spice in Indian cooking for its strong flavor and digestive properties. In traditional medicine, it's used for its anti-inflammatory and antimicrobial properties.",
  },
  {
    id: 7,
    essentialName: "Black Cumin Seed Oil",
    botanicalName: "(Nigella satvia)",
    uses: "Used in culinary applications for its nutty flavor and medicinal properties. In skincare, it's believed to have antioxidant and anti-inflammatory benefits.",
  },
  {
    id: 8,
    essentialName: "Bay Oil",
    botanicalName: "(Laurus nobilis)",
    uses: "Used in aromatherapy for its uplifting and energizing scent. In massage therapy, it's believed to relieve muscular aches and pains.",
  },
  {
    id: 9,
    essentialName: "Balsam Tolu Oil",
    botanicalName: "(Myroxylon balsamum)",
    uses: "Used in perfumery for its sweet and warm scent. In traditional medicine, it's used for its antiseptic and expectorant properties.",
  },
  {
    id: 10,
    essentialName: "Birch Sweet Oil",
    botanicalName: "(Betula alba)",
    uses: "Used topically for its anti-inflammatory and pain-relieving properties. In aromatherapy, it's believed to promote feelings of vitality and renewal.",
  },
  {
    id: 11,
    essentialName: "Basil Oil",
    botanicalName: "(Ocimum basilicum)",
    uses: "Commonly used in aromatherapy for its uplifting and clarifying properties. It's also used in culinary applications for its flavor and aroma.",
  },
  {
    id: 12,
    essentialName: "Basil Oil (Holy Basil)",
    botanicalName: "(Ocimum sanctum)",
    uses: "Considered sacred in Ayurvedic medicine, Holy Basil oil is used for its stress-relieving and immune-boosting properties. It's also used in religious ceremonies for its purifying effects.",
  },
  {
    id: 13,
    essentialName: "Bergamot Oil",
    botanicalName: "(Citrus aurantium)",
    uses: "Commonly used in perfumery for its citrusy and uplifting scent. In aromatherapy, it's believed to relieve stress and promote relaxation.",
  },
  {
    id: 14,
    essentialName: "Bergamot Oil Bergaptene Free",
    botanicalName: "(Citrus aurantium)",
    uses: "Similar to regular Bergamot oil but without the photosensitive compound bergaptene, making it safe for use in skincare products. It's often used in natural perfumes and cosmetics.",
  },
  {
    id: 15,
    essentialName: "Betel Leaf Oil",
    botanicalName: "(Piper betel)",
    uses: "Used in traditional medicine for its antiseptic and digestive properties. It's also used in aromatherapy for its stimulating and refreshing aroma.",
  },
  {
    id: 16,
    essentialName: "Black Pepper Oil",
    botanicalName: "(Piper nigrum)",
    uses: "Known for its warming and stimulating properties, Black Pepper oil is used in massage blends to relieve muscular aches and pains. It's also used in aromatherapy for its energizing scent.",
  },
  {
    id: 17,
    essentialName: "Blue Tansy Oil",
    botanicalName: "(Tanacetum Vulgare)",
    uses: "High in chamazulene, Blue Tansy oil is prized for its soothing and anti-inflammatory properties. It's used in skincare products to calm irritated skin and reduce redness.",
  },
  {
    id: 18,
    essentialName: "Carthamus Absolute",
    botanicalName: "(Carthamus Tinctorius)",
    uses: "Used in perfumery for its sweet and floral scent, Carthamus Absolute adds depth and complexity to fragrance compositions. It's also used in aromatherapy for its calming effects.",
  },
  {
    id: 19,
    essentialName: "Champaka Oil",
    botanicalName: "(Magnolia Champaka)",
    uses: "Highly valued in perfumery for its exotic and floral aroma, Champaka oil is often used as a base note in luxury fragrances. It's also used in traditional medicine for its calming and grounding effects.",
  },
  {
    id: 20,
    essentialName: "Castoreum 50",
    botanicalName: "(Animal Product)",
    uses: "Derived from the castor sacs of beavers, Castoreum oil is used in perfumery for its musky and animalic scent. It's also used in traditional medicine for its purported aphrodisiac properties.",
  },
  {
    id: 21,
    essentialName: "Cajeput Oil",
    botanicalName: "(Melaleuca cajeputi)",
    uses: "Similar to Tea Tree oil, Cajeput oil is used for its antiseptic and expectorant properties. It's commonly used in chest rubs and inhalants to relieve congestion.",
  },
  {
    id: 22,
    essentialName: "Chamomile Blue Oil",
    botanicalName: "(Matricaria chamomilla)",
    uses: "Known for its calming and soothing properties, Chamomile Blue oil is used in skincare products to reduce inflammation and irritation. It's also used in aromatherapy to promote relaxation and improve sleep.",
  },
  {
    id: 23,
    essentialName: "Chamomile Roman Oil",
    botanicalName: "(Anthemis nobilis)",
    uses: "Gentle and calming, Chamomile Roman oil is used in skincare products for its anti-inflammatory and skin-soothing properties. It's also used in aromatherapy to ease stress and anxiety.",
  },
  {
    id: 24,
    essentialName: "Camphor Bark Oil",
    botanicalName: "(Cinnamomum camphora)",
    uses: "Known for its cooling and analgesic properties, Camphor oil is used topically to relieve muscular aches and pains. It's also used in chest rubs and inhalants to clear congestion.",
  },
  {
    id: 25,
    essentialName: "Camphor Oil",
    botanicalName: "(Cinnamomum camphora)",
    uses: "Similar to Camphor Bark oil, Camphor oil is used for its cooling and pain-relieving properties. It's also used in traditional medicine for its antimicrobial effects.",
  },
  {
    id: 26,
    essentialName: "Caraway Oil",
    botanicalName: "(Carum carvi)",
    uses: "Known for its carminative properties, Caraway oil is used to aid digestion and relieve flatulence. It's also used in culinary applications for its aromatic flavor.",
  },
  {
    id: 27,
    essentialName: "Carrot Seed Oil",
    botanicalName: "(Daucus carota)",
    uses: "Rich in antioxidants and vitamins, Carrot Seed oil is used in skincare products for its anti-aging and skin-rejuvenating properties. It's also used in aromatherapy for its grounding and earthy scent.",
  },
  {
    id: 28,
    essentialName: "Cassia Oil",
    botanicalName: "(Cinnamomum cassia)",
    uses: "Similar to Cinnamon Bark oil, Cassia oil is used for its warming and stimulating properties. It's commonly used in aromatherapy to promote circulation and relieve muscular tension.",
  },
  {
    id: 29,
    essentialName: "Cananga Oil",
    botanicalName: "(Cananga odorata)",
    uses: "Known for its exotic and floral aroma, Cananga oil is used in perfumery for its sweet and sensual scent. It's also used in aromatherapy to reduce stress and promote relaxation.",
  },
  {
    id: 30,
    essentialName: "Cardamom Oil",
    botanicalName: "(Elettaria cardamomum)",
    uses: "Warm and spicy, Cardamom oil is used in culinary applications for its aromatic flavor. It's also used in aromatherapy to relieve nausea and improve digestion.",
  },
  {
    id: 31,
    essentialName: "Cedarwood Oil",
    botanicalName: "(Cedarus deodora)",
    uses: "Known for its woody and grounding scent, Cedarwood oil is used in perfumery for its base note properties. It's also used in aromatherapy to promote relaxation and meditation.",
  },
  {
    id: 32,
    essentialName: "Celery Seed Oil",
    botanicalName: "(Apium graveolens)",
    uses: "Used in culinary applications for its aromatic flavor, Celery Seed oil is also used in traditional medicine for its diuretic and anti-inflammatory properties.",
  },
  {
    id: 33,
    essentialName: "Cinnamon Bark Oil",
    botanicalName: "(Cinnamomum zeylanicum)",
    uses: "Warm and spicy, Cinnamon Bark oil is used in culinary applications for its sweet and aromatic flavor. It's also used in aromatherapy to stimulate circulation and relieve muscular tension.",
  },
  {
    id: 34,
    essentialName: "Cinnamon Bark Absolute",
    botanicalName: "(Cinnamonum Cassia Brum)",
    uses: "Similar to Cinnamon Bark oil but in absolute form, this oil is highly concentrated and used in perfumery for its warm and spicy scent. It's also used in aromatherapy for its stimulating properties.",
  },
  {
    id: 35,
    essentialName: "Cinnamon Leaf Oil",
    botanicalName: "(Cinnamomum verum)",
    uses: "Similar to Cinnamon Bark oil but with a milder scent, Cinnamon Leaf oil is used in culinary applications and aromatherapy for its sweet and spicy aroma.",
  },
  {
    id: 36,
    essentialName: "Citronella Oil",
    botanicalName: "(Cymbopogon nardus)",
    uses: "Known for its insect-repellent properties, Citronella oil is used in outdoor candles, sprays, and lotions to deter mosquitoes. It's also used in aromatherapy for its fresh and uplifting scent.",
  },
  {
    id: 37,
    essentialName: "Civet Oil",
    botanicalName: "(Animal Product)",
    uses: "Derived from the perineal glands of civets, Civet oil is used in perfumery for its musky and animalic scent. It's also used in traditional medicine for its purported aphrodisiac properties.",
  },
  {
    id: 38,
    essentialName: "Clary Sage Oil",
    botanicalName: "(Salivia sclarea)",
    uses: "Known for its euphoric and calming effects, Clary Sage oil is used in aromatherapy to reduce stress and promote relaxation. It's also used in skincare products for its balancing properties.",
  },
  {
    id: 39,
    essentialName: "Clove Bud Oil",
    botanicalName: "(Eugenia caryophyllata)",
    uses: "Warm and spicy, Clove Bud oil is used in culinary applications for its aromatic flavor. It's also used in traditional medicine for its analgesic and antiseptic properties.",
  },
  {
    id: 40,
    essentialName: "Clove leaf Oil",
    botanicalName: "(Eugenia caryophyllata)",
    uses: "Similar to Clove Bud oil but with a milder scent, Clove Leaf oil is used in aromatherapy for its stimulating and uplifting properties. It's also used in dental care products for its antiseptic effects.",
  },
  {
    id: 41,
    essentialName: "Coriander Seed Oil",
    botanicalName: "(Coriandrum sativum)",
    uses: "Used in culinary applications for its warm and spicy flavor. It's also used in aromatherapy for its calming and digestive properties.",
  },
  {
    id: 42,
    essentialName: "Coriander Leaf Oil",
    botanicalName: "(Coriandrum sativum)",
    uses: "Known for its fresh and citrusy aroma, Coriander Leaf oil is used in culinary applications and aromatherapy for its uplifting and revitalizing properties.",
  },
  {
    id: 43,
    essentialName: "Costus Oil",
    botanicalName: "(Saussurea lappa)",
    uses: "Highly valued in perfumery for its earthy and musky scent, Costus oil is used as a base note in luxury fragrances. It's also used in traditional medicine for its anti-inflammatory properties.",
  },
  {
    id: 44,
    essentialName: "Cubeb Oil",
    botanicalName: "(Piper cubeba)",
    uses: "Similar to Black Pepper oil, Cubeb oil is used for its warming and stimulating properties. It's commonly used in massage blends to relieve muscular aches and pains.",
  },
  {
    id: 45,
    essentialName: "Cumin Seed Oil",
    botanicalName: "(Cuminum cyminum)",
    uses: "Known for its warm and spicy aroma, Cumin Seed oil is used in culinary applications for its flavor and aroma. It's also used in aromatherapy for its digestive and carminative properties.",
  },
  {
    id: 46,
    essentialName: "Curry Leaf Oil",
    botanicalName: "(Murraya koenigi)",
    uses: "Highly valued in Indian cuisine for its distinctive flavor, Curry Leaf oil is used in cooking for its aromatic properties. It's also used in traditional medicine for its antioxidant and antimicrobial effects.",
  },
  {
    id: 47,
    essentialName: "Cypress Oil (Algeria)",
    botanicalName: "(Cupressus sempervirens)",
    uses: "Known for its woody and refreshing scent, Cypress oil is used in aromatherapy to promote vitality and balance. It's also used in skincare products for its astringent and toning properties.",
  },
  {
    id: 48,
    essentialName: "Cypress Oil",
    botanicalName: "(Cupressus sempervirens)",
    uses: "Similar to Cypress Oil (Algeria), Cypress oil is used for its refreshing and grounding properties in aromatherapy. It's also used in massage blends to improve circulation and relieve muscular tension.",
  },
  {
    id: 49,
    essentialName: "Dawana Oil",
    botanicalName: "(Artemisia pallens)",
    uses: "Known for its sweet and floral aroma, Dawana oil is used in perfumery for its exotic scent. It's also used in aromatherapy for its calming and sedative properties.",
  },
  {
    id: 50,
    essentialName: "Dill Seed Oil",
    botanicalName: "(Anethum graveolens)",
    uses: "Used in culinary applications for its aromatic flavor, Dill Seed oil is also used in traditional medicine for its digestive and carminative properties.",
  },
  {
    id: 51,
    essentialName: "Dwarf Pine Oil",
    botanicalName: "(Pinus mugo)",
    uses: "Known for its fresh and invigorating scent, Dwarf Pine oil is used in aromatherapy to promote respiratory health and clear congestion. It's also used in massage blends for its soothing and warming effects.",
  },
  {
    id: 52,
    essentialName: "Elemi Oil",
    botanicalName: "(Canarium luzonicum)",
    uses: "Similar to Frankincense oil, Elemi oil is used in perfumery for its resinous and balsamic scent. It's also used in skincare products for its rejuvenating and skin-toning properties.",
  },
  {
    id: 53,
    essentialName: "Eucalyptus Oil",
    botanicalName: "(Eucalyptus globulus)",
    uses: "Known for its fresh and invigorating scent, Eucalyptus oil is used in aromatherapy to promote respiratory health and clear congestion. It's also used in skincare products for its antiseptic and cooling properties.",
  },
  {
    id: 54,
    essentialName: "Eucalyptus Radiata Oil",
    botanicalName: "(Eucalyptus Radiata)",
    uses: "Similar to Eucalyptus Oil, Eucalyptus Radiata oil is used for its respiratory and decongestant properties. It's also used in massage blends for its analgesic and anti-inflammatory effects.",
  },
  {
    id: 55,
    essentialName: "Fennel Seed Oil Sweet",
    botanicalName: "(Foeniculum vulgare)",
    uses: "Known for its sweet and anise-like aroma, Sweet Fennel Seed oil is used in culinary applications for its flavor. It's also used in aromatherapy for its digestive and diuretic properties.",
  },
  {
    id: 56,
    essentialName: "Fir Needle Oil",
    botanicalName: "(Abies siberica)",
    uses: "Known for its fresh and forest-like aroma, Fir Needle oil is used in aromatherapy for its grounding and energizing properties. It's also used in skincare products for its astringent and cleansing effects.",
  },
  {
    id: 57,
    essentialName: "Frankincense Oil",
    botanicalName: "(Boswellia serrata)",
    uses: "Highly valued in perfumery and religious ceremonies for its resinous and woody scent, Frankincense oil is also used in skincare products for its rejuvenating and anti-aging properties.",
  },
  {
    id: 58,
    essentialName: "Frangipani Oil",
    botanicalName: "(Plumeria alba.)",
    uses: "Known for its exotic and floral aroma, Frangipani oil is used in perfumery for its sweet and sensual scent. It's also used in aromatherapy to promote relaxation and uplift the mood.",
  },
  {
    id: 59,
    essentialName: "Fragonia Oil",
    botanicalName: "(Agonis Fragrans)",
    uses: "Known for its calming and balancing properties, Fragonia oil is used in aromatherapy to reduce stress and anxiety. It's also used in skincare products for its antibacterial and anti-inflammatory effects.",
  },
  {
    id: 60,
    essentialName: "Geranium Oil INDIAN",
    botanicalName: "(Pelargonium graveolens)",
    uses: "Similar to Geranium Oil SB, Geranium Oil INDIAN is used in perfumery for its floral and rosy scent. It's also used in skincare products for its balancing and astringent properties.",
  },
  {
    id: 61,
    essentialName: "Geranium Oil SB",
    botanicalName: "(Pelargoneum Roseum)",
    uses: "Known for its floral and rosy scent, Geranium Oil SB is used in perfumery for its balancing and uplifting properties. It's also used in skincare products for its astringent and toning effects.",
  },
  {
    id: 62,
    essentialName: "Geranium Oil DB",
    botanicalName: "(Pelargoneum Roseum)",
    uses: "Similar to Geranium Oil SB, Geranium Oil DB is used for its floral and rosy scent in perfumery. It's also used in skincare products for its balancing and astringent properties.",
  },
  {
    id: 63,
    essentialName: "Geranium Oil DRG",
    botanicalName: "(Pelargoneum roseum mint)",
    uses: "Known for its minty and floral aroma, Geranium Oil DRG is used in perfumery for its refreshing and uplifting properties. It's also used in skincare products for its astringent and toning effects.",
  },
  {
    id: 64,
    essentialName: "Ginger Grass Oil",
    botanicalName: "(Cympopogan martini)",
    uses: "Similar to Lemongrass oil, Ginger Grass oil is used for its citrusy and earthy scent. It's commonly used in aromatherapy for its energizing and uplifting properties.",
  },
  {
    id: 65,
    essentialName: "Ginger Oil",
    botanicalName: "(Zingiber officinalis)",
    uses: "Known for its warm and spicy aroma, Ginger oil is used in culinary applications and aromatherapy for its digestive and warming properties.",
  },
  {
    id: 66,
    essentialName: "Ginger Bio",
    botanicalName: "(Zingiber officinalis)",
    uses: "Similar to Ginger Oil, Ginger Bio is used in culinary applications and aromatherapy for its spicy and warming properties.",
  },
  {
    id: 67,
    essentialName: "Grapefruit Oil",
    botanicalName: "(Citrus paradisi)",
    uses: "Known for its fresh and citrusy scent, Grapefruit oil is used in aromatherapy for its uplifting and invigorating properties. It's also used in skincare products for its astringent and toning effects.",
  },
  {
    id: 68,
    essentialName: "Garlic Oil",
    botanicalName: "(Allium sativum)",
    uses: "Known for its pungent aroma, Garlic oil is used in culinary applications for its flavor. It's also used in traditional medicine for its antimicrobial and immune-boosting properties.",
  },
  {
    id: 69,
    essentialName: "Ginger Lily Oil",
    botanicalName: "(Hedychium spicatum)",
    uses: "Known for its exotic and floral aroma, Ginger Lily oil is used in perfumery for its sensual and romantic scent. It's also used in aromatherapy to reduce stress and anxiety.",
  },
  {
    id: 70,
    essentialName: "Galangal Oil",
    botanicalName: "(Alpinia galanga)",
    uses: "Similar to Ginger oil, Galangal oil is used in culinary applications for its warm and spicy flavor. It's also used in traditional medicine for its digestive and anti-inflammatory properties.",
  },
  {
    id: 71,
    essentialName: "Galbanum Oil",
    botanicalName: "(Ferula galbaniflua)",
    uses: "Known for its green and earthy scent, Galbanum oil is used in perfumery for its fresh and balsamic aroma. It's also used in skincare products for its anti-inflammatory and skin-healing properties.",
  },
  {
    id: 72,
    essentialName: "Ho Leaf Oil",
    botanicalName: "(Cinamomum camphora)",
    uses: "Similar to Camphor oil, Ho Leaf oil is used for its cooling and analgesic properties. It's commonly used in massage blends to relieve muscular aches and pains.",
  },
  {
    id: 73,
    essentialName: "Ho Wood Oil",
    botanicalName: "(Cinnamonum Caphora)",
    uses: "Similar to Camphor oil, Ho Wood oil is used for its calming and grounding properties. It's commonly used in aromatherapy to promote relaxation and reduce stress.",
  },
  {
    id: 74,
    essentialName: "Hops Oil",
    botanicalName: "(Humulus lupulus)",
    uses: "Known for its earthy and herbal aroma, Hops oil is used in perfumery for its calming and sedative properties. It's also used in skincare products for its anti-inflammatory and skin-soothing effects.",
  },
  {
    id: 75,
    essentialName: "Honeysuckle Oil",
    botanicalName: "(Lonicera caprifolium)",
    uses: "Known for its sweet and floral scent, Honeysuckle oil is used in perfumery for its romantic and nostalgic aroma. It's also used in skincare products for its moisturizing and skin-brightening effects.",
  },
  {
    id: 76,
    essentialName: "Hyssop Oil",
    botanicalName: "(Hyssopus officinalis)",
    uses: "Known for its fresh and herbaceous scent, Hyssop oil is used in aromatherapy for its cleansing and purifying properties. It's also used in skincare products for its antiseptic and skin-toning effects.",
  },
  {
    id: 77,
    essentialName: "Hina Oil Spl.",
    botanicalName: "(Painciana Regia)",
    uses: "Known for its rich and woody aroma, Hina Oil Spl. is used in perfumery for its exotic and luxurious scent. It's also used in traditional ceremonies for its spiritual and grounding properties.",
  },
  {
    id: 78,
    essentialName: "Jasmine Abs.",
    uses: "Highly valued in perfumery for its exotic and floral scent, Jasmine Absolute is often used as a base note in luxury fragrances. It's also used in skincare products for its moisturizing and skin-rejuvenating effects.",
  },
  {
    id: 79,
    essentialName: "Jasmine Absolute Sambac",
    botanicalName: "(Jasminum Sambac)",
    uses: "Known for its sweet and exotic aroma, Jasmine Absolute Sambac is used in perfumery for its sensual and romantic scent. It's also used in aromatherapy to uplift the mood and reduce stress.",
  },
  {
    id: 80,
    essentialName: "Jasmine Absolute (Grandiflora)",
    botanicalName: "(Jasminum Gradiflorum)",
    uses: "Similar to Jasmine Absolute Sambac, Jasmine Absolute (Grandiflora) is used for its sweet and floral aroma in perfumery. It's also used in skincare products for its moisturizing and skin-soothing properties.",
  },
  {
    id: 81,
    essentialName: "Jasmine Absolote (CJM)",
    uses: "Similar to Jasmine Absolute Sambac, Jasmine Absolote (CJM) is used in perfumery for its exotic and floral scent. It's also used in aromatherapy to promote relaxation and reduce anxiety.",
  },
  {
    id: 82,
    essentialName: "Juniper Berry Oil (IMP M)",
    botanicalName: "(Juniperus communis)",
    uses: "Known for its fresh and woody aroma, Juniper Berry oil is used in aromatherapy for its cleansing and detoxifying properties. It's also used in skincare products for its astringent and toning effects.",
  },
  {
    id: 83,
    essentialName: "Juniper Berry Oil (IMP)",
    botanicalName: "(Juniperus communis)",
    uses: "Similar to Juniper Berry Oil (IMP M), Juniper Berry oil is used for its cleansing and detoxifying properties in aromatherapy. It's also used in massage blends to relieve muscular aches and pains.",
  },
  {
    id: 84,
    essentialName: "Juniper Leaf Oil",
    botanicalName: "(Juniperus communis)",
    uses: "Similar to Juniper Berry oil, Juniper Leaf oil is used in aromatherapy for its purifying and invigorating properties. It's also used in skincare products for its astringent and toning effects.",
  },
  {
    id: 85,
    essentialName: "Kafir Lime Oil",
    botanicalName: "(citrus Hystrix)",
    uses: "Known for its citrusy and refreshing scent, Kafir Lime oil is used in culinary applications and aromatherapy for its uplifting and invigorating properties.",
  },
  {
    id: 86,
    essentialName: "Kewra Oil",
    botanicalName: "(Pandanus fascicularis)",
    uses: "Highly valued in perfumery and culinary applications for its exotic and floral aroma, Kewra oil is also used in skincare products for its moisturizing and skin-brightening effects.",
  },
  {
    id: 87,
    essentialName: "Labdanum Oil",
    botanicalName: "(Cistus ladanifer)",
    uses: "Known for its rich and resinous scent, Labdanum oil is used in perfumery for its warm and sensual aroma. It's also used in skincare products for its skin-healing and rejuvenating properties.",
  },
  {
    id: 88,
    essentialName: "Lemongrass Oil",
    botanicalName: "(Cymbopogon citrates)",
    uses: "Known for its citrusy and refreshing scent, Lemongrass oil is used in culinary applications and aromatherapy for its uplifting and invigorating properties.",
  },
  {
    id: 89,
    essentialName: "Lemon Oil",
    botanicalName: "(Citrus limonum)",
    uses: "Known for its fresh and citrusy scent, Lemon oil is used in culinary applications, cleaning products, and aromatherapy for its refreshing and uplifting properties.",
  },
  {
    id: 90,
    essentialName: "Lemon Verbena Oil",
    botanicalName: "(Aloysia triphtlla)",
    uses: "Known for its lemony and floral aroma, Lemon Verbena oil is used in perfumery for its fresh and uplifting scent. It's also used in skincare products for its toning and revitalizing effects.",
  },
  {
    id: 91,
    essentialName: "Lime Oil",
    botanicalName: "(Citrus aurantifolia)",
    uses: "Lime oil is commonly used in aromatherapy for its uplifting and energizing properties. It's also used in skincare products for its astringent and antiseptic qualities.",
  },
  {
    id: 92,
    essentialName: "Laurel Berry Oil",
    botanicalName: "(Laurus nobilis)",
    uses: "Laurel berry oil is known for its antimicrobial and anti-inflammatory properties. It's often used in hair care products for promoting hair growth and scalp health.",
  },
  {
    id: 93,
    essentialName: "Laurel Leaf Oil",
    botanicalName: "(Laurus nobilis)",
    uses: "Laurel leaf oil has a refreshing aroma and is used in aromatherapy for respiratory issues. It's also employed in massage oils for its muscle-relaxing properties.",
  },
  {
    id: 94,
    essentialName: "Lavender Oil Regular",
    botanicalName: "(Lavandula officinalis)",
    uses: "Lavender oil regular is renowned for its calming and soothing effects. It's widely used in aromatherapy for relaxation, as well as in skincare products for its healing properties.",
  },
  {
    id: 95,
    essentialName: "Lavender Oil Pure",
    botanicalName: "(Lavandula angustifolia)",
    uses: "Lavender oil pure is prized for its gentle aroma and versatile uses. It's used in aromatherapy, skincare, and as a natural insect repellent.",
  },
  {
    id: 96,
    essentialName: "Lavender Oil China",
    botanicalName: "(Lavendula Dentata)",
    uses: "Lavender oil from China is valued for its floral scent and therapeutic properties. It's used in aromatherapy for relaxation and stress relief.",
  },
  {
    id: 97,
    essentialName: "Lavandin Oil Grosso",
    botanicalName: "(Lavandula hybrida grosso)",
    uses: "Lavandin oil Grosso is a hybrid of true lavender and spike lavender. It's used in massage oils for its muscle-relaxing properties and in cleaning products for its fresh scent.",
  },
  {
    id: 98,
    essentialName: "Lavendin Oil Aryallis",
    botanicalName: "(Lavandula x intermedia)",
    uses: "Lavendin oil Aryallis is known for its robust aroma and antifungal properties. It's often used in soaps, candles, and perfumes.",
  },
  {
    id: 99,
    essentialName: "Mace Oil",
    botanicalName: "(Myristica fragrans)",
    uses: "Mace oil is derived from the aril of the nutmeg seed and has a warm, spicy aroma. It's used in aromatherapy for its calming effects and in massage oils for its warming properties.",
  },
  {
    id: 100,
    essentialName: "Mandarin Oil",
    botanicalName: "(Citrus reticulate)",
    uses: "Mandarin oil has a sweet, citrusy aroma and is often used in aromatherapy for its uplifting and cheering effects. It's also used in skincare for its astringent properties.",
  },
  {
    id: 101,
    essentialName: "May Chang Oil",
    botanicalName: "Litsea cubeba Oil",
    uses: "May Chang oil, also known as Litsea cubeba oil, has a lemony scent and is used in aromatherapy for its stimulating and refreshing effects. It's also used in skincare for its astringent properties.",
  },
  {
    id: 102,
    essentialName: "Mentha Piperata Oil (1.6%)",
    botanicalName: "Mentha piperata",
    uses: "Mentha piperata oil, commonly known as peppermint oil, is used for its cooling and invigorating properties. It's used in aromatherapy, as well as in oral care and topical analgesics.",
  },
  {
    id: 103,
    essentialName: "Mentha Citrata Oil",
    botanicalName: "Mentha Citrata",
    uses: "Mentha citrata oil has a citrusy mint aroma and is used in aromatherapy for its uplifting and energizing effects. It's also used in skincare for its refreshing properties.",
  },
  {
    id: 104,
    essentialName: "Marjoram Oil",
    botanicalName: "Origanum marjorana",
    uses: "Marjoram oil is known for its warming and comforting properties. It's used in aromatherapy for relaxation and stress relief, as well as in massage oils for soothing tired muscles.",
  },
  {
    id: 105,
    essentialName: "Mimosa Absolute",
    botanicalName: "Acacia dealbata",
    uses: "Mimosa absolute has a sweet, floral aroma and is used in perfumery for its exotic scent. It's also used in skincare for its moisturizing and rejuvenating properties.",
  },
  {
    id: 106,
    essentialName: "Melissa Oil",
    botanicalName: "Melissa officinalis",
    uses: "Melissa oil, also known as lemon balm oil, has a fresh, lemony scent and is used in aromatherapy for its calming and uplifting effects. It's also used in skincare for its antiviral properties.",
  },
  {
    id: 107,
    essentialName: "Myrrh Oil",
    botanicalName: "Commiphora myrrha",
    uses: "Myrrh oil has a warm, resinous aroma and is used in aromatherapy for its grounding and meditative effects. It's also used in skincare for its moisturizing and rejuvenating properties.",
  },
  {
    id: 108,
    essentialName: "Myrtle Oil France",
    botanicalName: "Myrtus communis",
    uses: "Myrtle oil has a fresh, camphoraceous aroma and is used in aromatherapy for its clarifying and cleansing effects. It's also used in skincare for its astringent and antiseptic properties.",
  },
  {
    id: 109,
    essentialName: "Neroli Oil G",
    botanicalName: "Citrus aurantium",
    uses: "Neroli oil, derived from orange blossoms, has a sweet, floral aroma and is used in aromatherapy for its calming and uplifting effects. It's also used in skincare for its regenerative properties.",
  },
  {
    id: 110,
    essentialName: "Neroli Oil IMP M",
    botanicalName: "Citrus aurantium",
    uses: "Neroli oil, derived from orange blossoms, has a sweet, floral aroma and is used in aromatherapy for its calming and uplifting effects. It's also used in skincare for its regenerative properties.",
  },
  {
    id: 111,
    essentialName: "Niaouli Oil",
    botanicalName: "Melaleuca viridiflora",
    uses: "Niaouli oil has a fresh, medicinal aroma and is used in aromatherapy for its immune-boosting and respiratory-clearing effects. It's also used in skincare for its antiseptic and anti-inflammatory properties.",
  },
  {
    id: 112,
    essentialName: "Nutmeg Oil",
    botanicalName: "Myristica fragrans",
    uses: "Nutmeg oil has a warm, spicy aroma and is used in aromatherapy for its invigorating and stimulating effects. It's also used in skincare for its anti-inflammatory and analgesic properties.",
  },
  {
    id: 113,
    essentialName: "Orange Peel Oil",
    botanicalName: "Citrus Aurantium",
    uses: "Orange peel oil has a fresh, citrusy aroma and is used in aromatherapy for its uplifting and cheering effects. It's also used in skincare for its cleansing and brightening properties.",
  },
  {
    id: 114,
    essentialName: "Orange Oil Sweet",
    botanicalName: "Citrus sinensis",
    uses: "Sweet orange oil has a bright, uplifting aroma and is used in aromatherapy for its mood-lifting and energizing effects. It's also used in skincare for its cleansing and toning properties.",
  },
  {
    id: 115,
    essentialName: "Onion Seed Oil",
    botanicalName: "Citrus aurantium bigaradia",
    uses: "Onion seed oil has a pungent aroma and is used in aromatherapy for its warming and stimulating effects. It's also used in hair care for promoting hair growth and scalp health.",
  },
  {
    id: 116,
    essentialName: "Oregano Oil",
    botanicalName: "Origanum vulgare",
    uses: "Oregano oil has a strong, herbaceous aroma and is used in aromatherapy for its immune-boosting and antimicrobial effects. It's also used in skincare for its purifying and cleansing properties.",
  },
  {
    id: 117,
    essentialName: "Oakmoss Abs.",
    botanicalName: "Evernia prunastri",
    uses: "Oakmoss absolute has a rich, earthy aroma and is used in perfumery for its fixative properties. It's also used in skincare for its soothing and moisturizing effects.",
  },
  {
    id: 118,
    essentialName: "Orris Oil",
    botanicalName: "Iris germanica",
    uses: "Orris oil has a sweet, floral aroma and is used in perfumery for its fixative properties. It's also used in skincare for its anti-aging and moisturizing properties.",
  },
  {
    id: 119,
    essentialName: "Palmarosa Oil",
    botanicalName: "Cymbopogon martini",
    uses: "Palmarosa oil has a floral, rosy aroma and is used in aromatherapy for its balancing and uplifting effects. It's also used in skincare for its moisturizing and rejuvenating properties.",
  },
  {
    id: 120,
    essentialName: "Patchouli Oil",
    botanicalName: "Pogostemon cablin",
    uses: "Patchouli oil has a rich, earthy aroma and is used in aromatherapy for its grounding and calming effects. It's also used in skincare for its regenerative and antiseptic properties.",
  },
  {
    id: 121,
    essentialName: "Patchouli Oil 40 S",
    botanicalName: "Pogostemon heyneanus",
    uses: "Patchouli oil 40 S has a strong, earthy aroma and is used in perfumery for its fixative properties. It's also used in skincare for its anti-inflammatory and antifungal properties.",
  },
  {
    id: 122,
    essentialName: "Petitgrain Oil",
    botanicalName: "Citrus aurantium",
    uses: "Petitgrain oil has a fresh, woody aroma and is used in aromatherapy for its calming and uplifting effects. It's also used in skincare for its astringent and toning properties.",
  },
  {
    id: 123,
    essentialName: "Peru Oil",
    botanicalName: "Myroxylon pereirae",
    uses: "Peru oil has a warm, balsamic aroma and is used in perfumery for its fixative properties. It's also used in skincare for its antiseptic and healing properties.",
  },
  {
    id: 124,
    essentialName: "Pimento Berry Oil",
    botanicalName: "Pimenta dioica",
    uses: "Pimento berry oil, also known as allspice oil, has a warm, spicy aroma and is used in aromatherapy for its warming and stimulating effects. It's also used in skincare for its antiseptic and analgesic properties.",
  },
  {
    id: 125,
    essentialName: "Pine Needle Oil",
    botanicalName: "Pinus sylvestris",
    uses: "Pine needle oil has a fresh, woody aroma and is used in aromatherapy for its energizing and invigorating effects. It's also used in cleaning products for its antiseptic properties.",
  },
  {
    id: 126,
    essentialName: "Peppermint Oil  20%",
    botanicalName: "Mentha Arvensis",
    uses: "Peppermint oil is known for its cooling and refreshing properties. It's used in aromatherapy, oral care, and topical analgesics for its invigorating effects and ability to relieve muscle tension.",
  },
  {
    id: 127,
    essentialName: "Peppermint Oil  70%",
    botanicalName: "Mentha Arvensis",
    uses: "Peppermint oil is known for its cooling and refreshing properties. It's used in aromatherapy, oral care, and topical analgesics for its invigorating effects and ability to relieve muscle tension.",
  },
  {
    id: 128,
    essentialName: "Ravintsara Oil",
    botanicalName: "Cinnamomum camphora",
    uses: "Ravintsara oil has a fresh, camphoraceous aroma and is used in aromatherapy for its immune-boosting and respiratory-clearing effects. It's also used in skincare for its antiviral and antibacterial properties.",
  },
  {
    id: 129,
    essentialName: "Rhododendron Oil",
    botanicalName: "Ericaceae",
    uses: "Rhododendron oil has a floral, woody aroma and is used in aromatherapy for its calming and grounding effects. It's also used in skincare for its anti-inflammatory and analgesic properties.",
  },
  {
    id: 130,
    essentialName: "Rosemary Oil French",
    botanicalName: "Rosmarinus officinalis",
    uses: "Rosemary oil has a fresh, herbaceous aroma and is used in aromatherapy for its stimulating and clarifying effects. It's also used in hair care for promoting hair growth and scalp health.",
  },
  {
    id: 131,
    essentialName: "Rosemary Oil Spanish",
    botanicalName: "Rosmarinus officinalis",
    uses: "Rosemary oil Spanish has a fresh, herbaceous aroma and is used in aromatherapy for its stimulating and clarifying effects. It's also used in hair care for promoting hair growth and scalp health.",
  },
  {
    id: 132,
    essentialName: "Rose Oil",
    botanicalName: "Rosa Damascena",
    uses: "Rose oil, also known as rose otto, has a sweet, floral aroma and is used in aromatherapy for its mood-lifting and aphrodisiac effects. It's also used in skincare for its hydrating and anti-aging properties.",
  },
  {
    id: 133,
    essentialName: "Rose De Mai (Rose Absolute)",
    botanicalName: "Rosa Damascena",
    uses: "Rose de Mai, or rose absolute, has an intense, rich floral aroma and is used in perfumery for its luxurious scent. It's also used in skincare for its regenerative and toning properties.",
  },
  {
    id: 134,
    essentialName: "Rose Oil Moroccan",
    botanicalName: "Rosa centifolia",
    uses: "Rose oil Moroccan has a rich, floral aroma and is used in aromatherapy for its calming and balancing effects. It's also used in skincare for its hydrating and soothing properties.",
  },
  {
    id: 135,
    essentialName: "Rosewood Oil",
    botanicalName: "Aniba rosaeaodora",
    uses: "Rosewood oil has a sweet, woody aroma and is used in aromatherapy for its calming and uplifting effects. It's also used in skincare for its moisturizing and rejuvenating properties.",
  },
  {
    id: 136,
    essentialName: "Rose Geranium Oil",
    botanicalName: "Pelargonium graveolens",
    uses: "Rose geranium oil has a floral, rosy aroma and is used in aromatherapy for its balancing and uplifting effects. It's also used in skincare for its astringent and anti-inflammatory properties.",
  },
  {
    id: 137,
    essentialName: "Sage Oil (Dalmatian)",
    botanicalName: "Salvere",
    uses: "Sage oil Dalmatian has a fresh, herbaceous aroma and is used in aromatherapy for its clarifying and grounding effects. It's also used in skincare for its antibacterial and astringent properties.",
  },
  {
    id: 138,
    essentialName: "Sugandh Kokila Oil",
    botanicalName: "Cinnamomum Glaucescens",
    uses: "Sugandh kokila oil has a spicy, woody aroma and is used in aromatherapy for its calming and grounding effects. It's also used in skincare for its antiseptic and anti-inflammatory properties.",
  },
  {
    id: 139,
    essentialName: "Scotch Pine Oil",
    botanicalName: "Pinus sylvestris",
    uses: "Scotch pine oil has a fresh, woody aroma and is used in aromatherapy for its invigorating and cleansing effects. It's also used in skincare for its antimicrobial and decongestant properties.",
  },
  {
    id: 140,
    essentialName: "SpikeNard Oil",
    botanicalName: "Nardostachys jatamansi",
    uses: "Spikenard oil has a warm, earthy aroma and is used in aromatherapy for its grounding and sedative effects. It's also used in skincare for its anti-inflammatory and healing properties.",
  },
  {
    id: 141,
    essentialName: "Sugandhmantri Oil",
    botanicalName: "Homalomena aromatica",
    uses: "Sugandhmantri oil has a sweet, woody aroma and is used in aromatherapy for its calming and soothing effects. It's also used in skincare for its antiseptic and anti-inflammatory properties.",
  },
  {
    id: 142,
    essentialName: "Tangerine Oil",
    botanicalName: "Citrus Ladaniferus",
    uses: "Tangerine oil has a sweet, citrusy aroma and is used in aromatherapy for its uplifting and energizing effects. It's also used in skincare for its cleansing and brightening properties.",
  },
  {
    id: 143,
    essentialName: "Tarragon Oil",
    botanicalName: "Atremisia dracunculus",
    uses: "Tarragon oil has a fresh, herbaceous aroma and is used in aromatherapy for its calming and digestive properties. It's also used in skincare for its antioxidant and anti-inflammatory properties.",
  },
  {
    id: 144,
    essentialName: "Tea Tree Oil French",
    botanicalName: "Melaleuca alternifolia",
    uses: "Tea tree oil French has a fresh, medicinal aroma and is used in aromatherapy for its immune-boosting and antimicrobial effects. It's also used in skincare for its antiseptic and acne-fighting properties.",
  },
  {
    id: 145,
    essentialName: "Tea Tree Oil Australian",
    botanicalName: "Melaleuca alternifolia",
    uses: "Tea tree oil Australian has a fresh, medicinal aroma and is used in aromatherapy for its immune-boosting and antimicrobial effects. It's also used in skincare for its antiseptic and acne-fighting properties.",
  },
  {
    id: 146,
    essentialName: "Thyme Oil",
    botanicalName: "Thymus vulgaris",
    uses: "Thyme oil has a strong, herbaceous aroma and is used in aromatherapy for its immune-boosting and antimicrobial effects. It's also used in skincare for its astringent and acne-fighting properties.",
  },
  {
    id: 147,
    essentialName: "Turmeric Root Oil",
    botanicalName: "Curcuma longa",
    uses: "Turmeric root oil has a warm, spicy aroma and is used in aromatherapy for its anti-inflammatory and antioxidant effects. It's also used in skincare for its brightening and healing properties.",
  },
  {
    id: 148,
    essentialName: "Turpentine Oil",
    botanicalName: "Pinus Palustris",
    uses: "Turpentine oil has a strong, pungent aroma and is used in aromatherapy for its cleansing and decongestant effects. It's also used in topical treatments for its analgesic and antiseptic properties.",
  },
  {
    id: 149,
    essentialName: "Tagetes / Marigold Oil",
    botanicalName: "Tagetes minuta",
    uses: "Tagetes oil, also known as marigold oil, has a sweet, fruity aroma and is used in aromatherapy for its calming and uplifting effects. It's also used in skincare for its antiseptic and anti-inflammatory properties.",
  },
  {
    id: 150,
    essentialName: "Treemoss Abs.",
    botanicalName: "Evernia Furfuracea",
    uses: "Treemoss absolute has a rich, earthy aroma and is used in perfumery for its fixative properties. It's also used in skincare for its soothing and moisturizing effects.",
  },
  {
    id: 151,
    essentialName: "Tuberose Absolute",
    botanicalName: "Polianthes tuberose",
    uses: "Tuberose absolute has a rich, floral aroma and is used in perfumery for its luxurious scent. It's also used in skincare for its moisturizing and rejuvenating properties.",
  },
  {
    id: 152,
    essentialName: "Vanilla Abs.",
    botanicalName: "Vanilla planifolia",
    uses: "Vanilla absolute has a rich, sweet aroma and is used in perfumery for its warm and comforting scent. It's also used in skincare for its antioxidant and soothing properties.",
  },
  {
    id: 153,
    essentialName: "Vetivert Oil",
    botanicalName: "Vetiveria zizanoides",
    uses: "Vetivert oil has a deep, earthy aroma and is used in aromatherapy for its grounding and calming effects. It's also used in skincare for its antiseptic and cicatrisant properties.",
  },
  {
    id: 154,
    essentialName: "Vetivert Oil (STD)",
    uses: "Vetivert oil (STD) is a standardized version of vetivert oil, known for its deep, earthy aroma and grounding effects in aromatherapy. It's also used in skincare for its antiseptic and cicatrisant properties.",
  },
  {
    id: 155,
    essentialName: "Vervain Oil",
    botanicalName: "Verbena officinalis",
    uses: "Vervain oil has a fresh, herbaceous aroma and is used in aromatherapy for its calming and uplifting effects. It's also used in skincare for its astringent and antibacterial properties.",
  },
  {
    id: 156,
    essentialName: "Warmwood Oil",
    botanicalName: "Artemisia annua",
    uses: "Wormwood oil has a strong, herbaceous aroma and is used in aromatherapy for its stimulating and clarifying effects. It's also used in skincare for its antiseptic and anti-inflammatory properties.",
  },
  {
    id: 157,
    essentialName: "Wintergreen Oil",
    botanicalName: "Gaultheria procumbens",
    uses: "Wintergreen oil has a sweet, minty aroma and is used in aromatherapy for its analgesic and anti-inflammatory effects. It's also used in skincare for its cooling and soothing properties.",
  },
  {
    id: 158,
    essentialName: "Yarrow Oil",
    botanicalName: "Achillea Millefolium",
    uses: "Yarrow oil has a herbaceous, slightly sweet aroma and is used in aromatherapy for its calming and balancing effects. It's also used in skincare for its anti-inflammatory and healing properties.",
  },
  {
    id: 159,
    essentialName: "Ylang Ylang Oil France",
    botanicalName: "Cananga odorata",
    uses: "Ylang ylang oil France has a sweet, floral aroma and is used in aromatherapy for its mood-lifting and aphrodisiac effects. It's also used in skincare for its balancing and hydrating properties.",
  },
  {
    id: 160,
    essentialName: "Ylang Ylang Oil Manila",
    botanicalName: "Cananga odorata",
    uses: "Ylang ylang oil Manila has a sweet, floral aroma and is used in aromatherapy for its mood-lifting and aphrodisiac effects. It's also used in skincare for its balancing and hydrating properties.",
  },
];
export { EssentialOilData };

// const EssentialOilData = [

// ];

// export { EssentialOilData };

const AbsolutesData = [
  { id: 1, essentialName: "ROSE ABSOLUTE", botanicalName: "ROSA DAMASCENA" },
  {
    id: 2,
    essentialName: "ROSE DE MAI ABSOLUTE",
    botanicalName: "ASMIUM SAMBAC",
  },
  {
    id: 3,
    essentialName: "JASMINE ABSOLUTE (SAMBAC)",
    botanicalName: "JASMINUM SAMBAC",
  },
  {
    id: 4,
    essentialName: "JASMINE ABSOLUTE (GRANDIFLORUM)",
    botanicalName: "JASMINUM GRANDIFLORUM",
  },
  {
    id: 5,
    essentialName: "JASMINE ABSOLUTE (AURICULATUM )",
    botanicalName: "JASMINUM AURICULATUM",
  },
  {
    id: 6,
    essentialName: "VETIVER ABSOLUTE",
    botanicalName: "VETIVERIA ZIZANOIDES",
  },
  {
    id: 7,
    essentialName: "TUBEROSE ABSOLUTE",
    botanicalName: "POLIANTHES TUBEROSA",
  },
  {
    id: 8,
    essentialName: "BLUE LOTUS ABSOLUTE",
    botanicalName: "NYMPHAEA CAERULEA",
  },
  {
    id: 9,
    essentialName: "WHITE LOTUS ABSOLUTE",
    botanicalName: "NELUMBO NUCIFERA",
  },
  {
    id: 10,
    essentialName: "PINK LOTUS ABSOLUTE",
    botanicalName: "NELUMBO NUCIFERA",
  },
  {
    id: 11,
    essentialName: "FRANGIPANI ABSOLUTE",
    botanicalName: "PLUMERIA ALBA",
  },
  {
    id: 12,
    essentialName: "CASSIE SWEET ABSOLUTE",
    botanicalName: "ACACIA FARNESIANA",
  },
  {
    id: 13,
    essentialName: "ORRIS ROOT ABSOLUTE",
    botanicalName: "IRIS PALLIDA",
  },
  {
    id: 14,
    essentialName: "AMBER ABSOLUTE",
    botanicalName: "PINUS SUCCINEFERA FOSSIL",
  },
  {
    id: 15,
    essentialName: "CHAMPACA ABSOLUTE",
    botanicalName: "MICHELIA CHAMPACA",
  },
  {
    id: 16,
    essentialName: "OSMANTHUS ABSOLUTE",
    botanicalName: "OSMANTHUS FRAGRANS",
  },
  {
    id: 17,
    essentialName: "BROOM ABSOLUTE (GENET ABSOLUTE)",
    botanicalName: "SPARTIUM JUNCEUM",
  },
  {
    id: 18,
    essentialName: "LINDEN BLOSSOM ABSOLUTE",
    botanicalName: "TILIA VULGARIS",
  },
  {
    id: 19,
    essentialName: "GINGER LILY ABSOLUTE",
    botanicalName: "HEDYCHIUM CORONARIUM",
  },
  { id: 20, essentialName: "ZAFRI/ GENDA ABSOLUTE", botanicalName: "MARIGOLD" },
  { id: 21, essentialName: "CHAMPACA ABSOLUTE", botanicalName: "MAGNOLIA" },
  { id: 22, essentialName: "MYRRH ABSOLUTE", botanicalName: "-" },
  { id: 23, essentialName: "ROSEWOOD ABSOLUTE", botanicalName: "-" },
  { id: 24, essentialName: "CARNATION ABSOLUTE", botanicalName: "-" },
  { id: 25, essentialName: "TUBEROSE ABSOLUTE", botanicalName: "-" },
  { id: 26, essentialName: "OAKMOSS ABSOLUTE", botanicalName: "-" },
  { id: 27, essentialName: "VIOLET LEAF ABSOLUTE", botanicalName: "-" },
  { id: 28, essentialName: "LABDANUM ABSOLUTE", botanicalName: "-" },
  { id: 29, essentialName: "MIMOSA ABSOLUTE", botanicalName: "-" },
  { id: 30, essentialName: "CHYPRE ABSOLUTE", botanicalName: "CISTUS INCANUS" },
];
export { AbsolutesData };

const AromatherapyOilData = [
  {
    id: 1,
    essentialName: "On the Basis of Emotional Well Being",
    botanicalName: "On the Basis of Emotional Well Being",
  },
  {
    id: 2,
    essentialName: "Stress Buster Massage Oil",
    botanicalName: "",
  },
  {
    id: 3,
    essentialName: "Stress Buster Bath",
    botanicalName: "",
  },
  {
    id: 4,
    essentialName: "Mental Re-energizer Bath",
    botanicalName: "",
  },
  {
    id: 5,
    essentialName: "Exam Tonic",
    botanicalName: "",
  },
  {
    id: 6,
    essentialName: "Aphrodisiac Massage Oil",
    botanicalName: "",
  },
  {
    id: 7,
    essentialName: "Calming Bath",
    botanicalName: "",
  },
  {
    id: 8,
    essentialName: "Alive Mind",
    botanicalName: "",
  },
  {
    id: 9,
    essentialName: "Energy",
    botanicalName: "",
  },
  {
    id: 10,
    essentialName: "Grief Support",
    botanicalName: "",
  },
  {
    id: 11,
    essentialName: "Happiness",
    botanicalName: "",
  },
  {
    id: 12,
    essentialName: "Beat the Winter Blues Bath",
    botanicalName: "",
  },
  {
    id: 13,
    essentialName: "Hers Alone",
    botanicalName: "",
  },
  {
    id: 14,
    essentialName: "Immune Boost",
    botanicalName: "",
  },
  {
    id: 15,
    essentialName: "Inner Light",
    botanicalName: "",
  },
  {
    id: 16,
    essentialName: "Joy & Harmony",
    botanicalName: "",
  },
  {
    id: 17,
    essentialName: "Mental Clarity",
    botanicalName: "",
  },
  {
    id: 18,
    essentialName: "Relaxing",
    botanicalName: "",
  },
  {
    id: 19,
    essentialName: "Sensuality",
    botanicalName: "",
  },
  {
    id: 20,
    essentialName: "Sensuous",
    botanicalName: "",
  },
  {
    id: 21,
    essentialName: "Sleepy Time",
    botanicalName: "",
  },
  {
    id: 22,
    essentialName: "Sports",
    botanicalName: "",
  },
  {
    id: 23,
    essentialName: "Meditation",
    botanicalName: "",
  },
  {
    id: 24,
    essentialName: "Invigorating",
    botanicalName: "",
  },
  {
    id: 25,
    essentialName: "On the Basis Of Physical Well Being",
    botanicalName: "On the Basis Of Physical Well Being",
  },
  {
    id: 26,
    essentialName: "Nasal Congestion Bath",
    botanicalName: "",
  },
  {
    id: 27,
    essentialName: "Head Clearing Steam",
    botanicalName: "",
  },
  {
    id: 28,
    essentialName: "Warming Bath",
    botanicalName: "",
  },
  {
    id: 29,
    essentialName: "Constipation Relief Massage",
    botanicalName: "",
  },
  {
    id: 30,
    essentialName: "Headache Relief Massage",
    botanicalName: "",
  },
  {
    id: 31,
    essentialName: "Muscle Soothing Bath",
    botanicalName: "",
  },
  {
    id: 32,
    essentialName: "Muscle Rub Massage",
    botanicalName: "",
  },
  {
    id: 33,
    essentialName: "Sleep Inducing Massage Oil",
    botanicalName: "",
  },
  {
    id: 34,
    essentialName: "Sleepy Head Bath Blend",
    botanicalName: "",
  },
  {
    id: 35,
    essentialName: "Premenstrual Tension Buster Massage Oil",
    botanicalName: "",
  },
  {
    id: 36,
    essentialName: "Over Indulgence Fixer Bath",
    botanicalName: "",
  },
  {
    id: 37,
    essentialName: "For Skin Care & Beauty",
    botanicalName: "",
  },

  {
    id: 38,
    essentialName: "Beat the Wrinkle Mature Skin Cream",
    botanicalName: "",
  },
  {
    id: 39,
    essentialName: "Nourishing Dry Skin Cream",
    botanicalName: "",
  },
  {
    id: 40,
    essentialName: "Brighten up Skin Cream for Dull & Congested Skin",
    botanicalName: "",
  },
  {
    id: 41,
    essentialName: "Eczema Relief Massage Oil",
    botanicalName: "",
  },
  {
    id: 42,
    essentialName: "Flake Clean / Anti Dandruff",
    botanicalName: "",
  },
  {
    id: 43,
    essentialName: "Hair Nourishing",
    botanicalName: "",
  },
  {
    id: 44,
    essentialName: "Dry Skin",
    botanicalName: "",
  },
  {
    id: 45,
    essentialName: "Mature / Wrinkle Oil",
    botanicalName: "",
  },
  {
    id: 46,
    essentialName: "Oily Skin",
    botanicalName: "",
  },
  {
    id: 47,
    essentialName: "Golden Glow",
    botanicalName: "",
  },
  {
    id: 48,
    essentialName: "Black Heads",
    botanicalName: "",
  },
  {
    id: 49,
    essentialName: "Cracked / Chapped Skin",
    botanicalName: "",
  },
  {
    id: 50,
    essentialName: "Devitalised Skin",
    botanicalName: "",
  },
  {
    id: 51,
    essentialName: "Acne Prone",
    botanicalName: "",
  },
  {
    id: 52,
    essentialName: "Astringent",
    botanicalName: "",
  },
  {
    id: 53,
    essentialName: "Cleansing",
    botanicalName: "",
  },
  {
    id: 54,
    essentialName: "Eczema",
    botanicalName: "",
  },
  {
    id: 55,
    essentialName: "Itching",
    botanicalName: "",
  },
  {
    id: 56,
    essentialName: "Pimples",
    botanicalName: "",
  },
  {
    id: 57,
    essentialName: "Puffness",
    botanicalName: "",
  },
  {
    id: 58,
    essentialName: "Scar",
    botanicalName: "",
  },
  {
    id: 59,
    essentialName: "Skin Toner",
    botanicalName: "",
  },
  {
    id: 60,
    essentialName: "Cellulite",
    botanicalName: "",
  },
  {
    id: 61,
    essentialName: "Attention",
    botanicalName: "",
  },
  {
    id: 62,
    essentialName: "Recharge",
    botanicalName: "",
  },
  {
    id: 63,
    essentialName: "Be Alert",
    botanicalName: "",
  },
  {
    id: 64,
    essentialName: "Clear your head",
    botanicalName: "",
  },
  {
    id: 65,
    essentialName: "Vitality Two",
    botanicalName: "",
  },
  {
    id: 66,
    essentialName: "Sensuality Two",
    botanicalName: "",
  },
  {
    id: 67,
    essentialName: "Sensuality Three",
    botanicalName: "",
  },
  {
    id: 68,
    essentialName: "Energy Two",
    botanicalName: "",
  },
  {
    id: 69,
    essentialName: "Sensuality One",
    botanicalName: "",
  },
  {
    id: 70,
    essentialName: "Relaxing One",
    botanicalName: "",
  },
  {
    id: 71,
    essentialName: "Meditation",
    botanicalName: "",
  },
  {
    id: 72,
    essentialName: "Invigorating",
    botanicalName: "",
  },
  {
    id: 73,
    essentialName: "The Vatta Dosha (Symbol Air) Concentrate",
    botanicalName: "",
  },
  {
    id: 74,
    essentialName: "The Kapha Dosha (Symbol Water) Concentrate",
    botanicalName: "",
  },
  {
    id: 75,
    essentialName: "The Pitta Dosha (Symbol Fire) Concentrate",
    botanicalName: "",
  },
  {
    id: 76,
    essentialName: "Vatta Massage Blend",
    botanicalName: "",
  },
  {
    id: 77,
    essentialName: "Kapha Massage Blend",
    botanicalName: "",
  },
  {
    id: 78,
    essentialName: "Pitta Massage Blend",
    botanicalName: "",
  },
  {
    id: 79,
    essentialName: "Calming Pitta",
    botanicalName: "",
  },
  {
    id: 80,
    essentialName: "Warming Kapha",
    botanicalName: "",
  },
  {
    id: 81,
    essentialName: "Cooling Pitta",
    botanicalName: "",
  },
  {
    id: 82,
    essentialName: "Calming Vatta",
    botanicalName: "",
  },
  {
    id: 83,
    essentialName: "Warming Vatta",
    botanicalName: "",
  },
  {
    id: 84,
    essentialName: "Stimulating Kapha",
    botanicalName: "",
  },
  {
    id: 85,
    essentialName: "On The Basis of Zodiac Signs",
    botanicalName: "On The Basis of Zodiac Signs",
  },
  {
    id: 86,
    essentialName: "Aries",
    botanicalName: "",
  },
  {
    id: 87,
    essentialName: "Taurus",
    botanicalName: "",
  },
  {
    id: 88,
    essentialName: "Gemini",
    botanicalName: "",
  },
  {
    id: 89,
    essentialName: "Cancer",
    botanicalName: "",
  },
  {
    id: 90,
    essentialName: "Leo",
    botanicalName: "",
  },
  {
    id: 91,
    essentialName: "Virgo",
    botanicalName: "",
  },
  {
    id: 92,
    essentialName: "Libra",
    botanicalName: "",
  },
  {
    id: 93,
    essentialName: "Scorpio",
    botanicalName: "",
  },
  {
    id: 94,
    essentialName: "Sagittarius",
    botanicalName: "",
  },
  {
    id: 95,
    essentialName: "Capricorn",
    botanicalName: "",
  },
  {
    id: 96,
    essentialName: "Aquarius",
    botanicalName: "",
  },
  {
    id: 97,
    essentialName: "Pisces",
    botanicalName: "",
  },
  {
    id: 98,
    essentialName: "On The Basis of Related Therapy",
    botanicalName: "On The Basis of Related Therapy",
  },
  {
    id: 99,
    essentialName: "Rose Geranium",
    botanicalName: "",
  },
  {
    id: 100,
    essentialName: "Jasmine Tangerine",
    botanicalName: "",
  },
  {
    id: 101,
    essentialName: "Eucalyptus Black Pepper",
    botanicalName: "",
  },
  {
    id: 102,
    essentialName: "Sandal Vetivert",
    botanicalName: "",
  },
  {
    id: 103,
    essentialName: "Lavender Basil",
    botanicalName: "",
  },
  {
    id: 104,
    essentialName: "Jasmine Mogra",
    botanicalName: "",
  },
  {
    id: 105,
    essentialName: "Rose Mandarin",
    botanicalName: "",
  },
  {
    id: 106,
    essentialName: "Bergamot Lime",
    botanicalName: "",
  },
  {
    id: 107,
    essentialName: "Honey Vanilla",
    botanicalName: "",
  },
  {
    id: 108,
    essentialName: "Jasmine Patchouli",
    botanicalName: "",
  },
  {
    id: 109,
    essentialName: "Sandalwood Saffron",
    botanicalName: "",
  },
  {
    id: 110,
    essentialName: "Rose Marigold",
    botanicalName: "",
  },
  {
    id: 111,
    essentialName: "Lavender Neroli",
    botanicalName: "",
  },
  {
    id: 112,
    essentialName: "Orange Cinnamon",
    botanicalName: "",
  },
  {
    id: 113,
    essentialName: "Blends For Home",
    botanicalName: "Blends For Home",
  },
  {
    id: 114,
    essentialName: "Festival Cheer Vapouriser Blend",
    botanicalName: "",
  },
  {
    id: 115,
    essentialName: "Sensual Vapouriser Blend",
    botanicalName: "",
  },
  {
    id: 116,
    essentialName: "Uplifting Vapouriser Blend",
    botanicalName: "",
  },
  {
    id: 117,
    essentialName: "Bacteria Buster Vapouriser Blend",
    botanicalName: "",
  },
  {
    id: 118,
    essentialName: "Apple Cinnamon",
    botanicalName: "",
  },
  {
    id: 119,
    essentialName: "Pink Rose",
    botanicalName: "",
  },
  {
    id: 120,
    essentialName: "Lavender MS",
    botanicalName: "",
  },
  {
    id: 121,
    essentialName: "Sandal",
    botanicalName: "",
  },
  {
    id: 122,
    essentialName: "Fruitbar",
    botanicalName: "",
  },
  {
    id: 123,
    essentialName: "Peach",
    botanicalName: "",
  },
];

export { AromatherapyOilData };

const CarrierOilData = [
  {
    id: 1,
    essentialName: "ALMOND OIL SWEET",
    botanicalName: "",
  },
  {
    id: 2,
    essentialName: "MYRTLE",
    botanicalName: "",
  },
  {
    id: 3,
    essentialName: "APRICOT KERNEL OIL",
    botanicalName: "",
  },
  {
    id: 4,
    essentialName: "NEEM OIL (COLD PRESSED)",
    botanicalName: "",
  },
  {
    id: 5,
    essentialName: "ARACHIS OIL",
    botanicalName: "",
  },
  {
    id: 6,
    essentialName: "OLIVE OIL PURE",
    botanicalName: "",
  },
  {
    id: 7,
    essentialName: "AVACADO OIL",
    botanicalName: "",
  },
  {
    id: 8,
    essentialName: "OLIVE OIL VIRGIN",
    botanicalName: "",
  },
  {
    id: 9,
    essentialName: "ALOE-VERA GEL",
    botanicalName: "",
  },
  {
    id: 10,
    essentialName: "PUMPKIN SEED OIL",
    botanicalName: "",
  },
  {
    id: 11,
    essentialName: "CALENDULA OIL",
    botanicalName: "",
  },
  {
    id: 12,
    essentialName: "PEACH KERNEL OIL",
    botanicalName: "",
  },
  {
    id: 13,
    essentialName: "CUCUMBER OIL",
    botanicalName: "",
  },
  {
    id: 14,
    essentialName: "SESAME OIL (DEODORIZED / DECOLORIZED)",
    botanicalName: "",
  },
  {
    id: 15,
    essentialName: "EVENING PRIMEROSE OIL",
    botanicalName: "",
  },
  {
    id: 16,
    essentialName: "SUN FLOWER OIL",
    botanicalName: "",
  },
  {
    id: 17,
    essentialName: "GRAPESEED OIL",
    botanicalName: "",
  },
  {
    id: 18,
    essentialName: "WHEATGERM OIL",
    botanicalName: "",
  },
  {
    id: 19,
    essentialName: "HAZELNUT OIL",
    botanicalName: "",
  },
  {
    id: 20,
    essentialName: "WALNUT OIL",
    botanicalName: "",
  },
  {
    id: 21,
    essentialName: "HEMPSEED OIL",
    botanicalName: "",
  },
  {
    id: 22,
    essentialName: "WATER MELON OIL",
    botanicalName: "",
  },
  {
    id: 23,
    essentialName: "JOJOBA OIL CLEAR (COLOUR LESS)",
    botanicalName: "",
  },
  {
    id: 24,
    essentialName: "JOJOBA OIL YELLOW",
    botanicalName: "",
  },
  {
    id: 25,
    essentialName: "LINSEED OIL (FLAX SEED)",
    botanicalName: "",
  },
  {
    id: 26,
    essentialName: "OAT FLOUR",
    botanicalName: "",
  },
  {
    id: 27,
    essentialName: "MUSK MELON OIL",
    botanicalName: "",
  },
  {
    id: 28,
    essentialName: "WHOLE EGG POWDER",
    botanicalName: "",
  },
  {
    id: 29,
    essentialName: "MORINGA OIL",
    botanicalName: "",
  },
  {
    id: 30,
    essentialName: "MACADAMIA NUT OIL",
    botanicalName: "",
  },
];

export { CarrierOilData };

const FlowerOilData = [
  {
    id: 1,
    essentialName: "BLUE LOTUS",
    botanicalName: "",
  },
  {
    id: 2,
    essentialName: "CARNATION",
    botanicalName: "",
  },
  {
    id: 3,
    essentialName: "CHAMPACA",
    botanicalName: "",
  },
  {
    id: 4,
    essentialName: "CHYPRE",
    botanicalName: "",
  },
  {
    id: 5,
    essentialName: "CYCLAMEN",
    botanicalName: "",
  },
  {
    id: 6,
    essentialName: "CARTHAMUS",
    botanicalName: "",
  },
  {
    id: 7,
    essentialName: "FRANGIPANI",
    botanicalName: "",
  },
  {
    id: 8,
    essentialName: "FOUGERE",
    botanicalName: "",
  },
  {
    id: 9,
    essentialName: "GARDENIA",
    botanicalName: "",
  },
  {
    id: 10,
    essentialName: "GINGER LILY",
    botanicalName: "",
  },
  {
    id: 11,
    essentialName: "HELIOTROPE",
    botanicalName: "",
  },
  {
    id: 12,
    essentialName: "HYACINTH",
    botanicalName: "",
  },
  {
    id: 13,
    essentialName: "LINDEN BLOSSOM",
    botanicalName: "",
  },
  {
    id: 14,
    essentialName: "LILIAC",
    botanicalName: "",
  },
  {
    id: 15,
    essentialName: "LILY",
    botanicalName: "",
  },
  {
    id: 16,
    essentialName: "LOTUS",
    botanicalName: "",
  },
  {
    id: 17,
    essentialName: "MAGNOLIA",
    botanicalName: "",
  },
  {
    id: 18,
    essentialName: "MUGUET",
    botanicalName: "",
  },
  {
    id: 19,
    essentialName: "ORANGE BLOSSOM",
    botanicalName: "",
  },
  {
    id: 20,
    essentialName: "ORCHID",
    botanicalName: "",
  },
  {
    id: 21,
    essentialName: "OSMANTHUS",
    botanicalName: "",
  },
  {
    id: 22,
    essentialName: "PINK LOTUS",
    botanicalName: "",
  },
  {
    id: 23,
    essentialName: "RESEDA",
    botanicalName: "",
  },
  {
    id: 24,
    essentialName: "TULIP",
    botanicalName: "",
  },
  {
    id: 25,
    essentialName: "VIOLET",
    botanicalName: "",
  },
  {
    id: 26,
    essentialName: "WALLFLOWER",
    botanicalName: "",
  },
  {
    id: 27,
    essentialName: "WHITE LOTUS",
    botanicalName: "",
  },
];

export { FlowerOilData };

const SpiceOilData = [
  {
    id: 1,
    essentialName: "AJOWAIN OIL",
    botanicalName: "",
  },
  {
    id: 2,
    essentialName: "BLACK PEPPER OIL",
    botanicalName: "",
  },
  {
    id: 3,
    essentialName: "CASSIA",
    botanicalName: "",
  },
  {
    id: 4,
    essentialName: "CINNAMON BARK OIL",
    botanicalName: "",
  },
  {
    id: 5,
    essentialName: "CINNAMON LEAF OIL",
    botanicalName: "",
  },
  {
    id: 6,
    essentialName: "CARDAMOM OIL",
    botanicalName: "",
  },
  {
    id: 7,
    essentialName: "CELERY SEED OIL",
    botanicalName: "",
  },
  {
    id: 8,
    essentialName: "CLOVE OIL",
    botanicalName: "",
  },
  {
    id: 9,
    essentialName: "CLOVE BUD OIL",
    botanicalName: "",
  },
  {
    id: 10,
    essentialName: "CUBEB OIL",
    botanicalName: "",
  },
  {
    id: 11,
    essentialName: "CUMIN SEED OIL",
    botanicalName: "",
  },
  {
    id: 12,
    essentialName: "DILL SEED OIL",
    botanicalName: "",
  },
  {
    id: 13,
    essentialName: "FENNEL SEED OIL (SWEET)",
    botanicalName: "",
  },
  {
    id: 14,
    essentialName: "MACE OIL",
    botanicalName: "",
  },
  {
    id: 15,
    essentialName: "NUTMEG OIL",
    botanicalName: "",
  },
  {
    id: 16,
    essentialName: "THYME OIL",
    botanicalName: "",
  },
  {
    id: 17,
    essentialName: "TOMAR SEED OIL",
    botanicalName: "",
  },
  {
    id: 18,
    essentialName: "PARSLEY SEED OIL",
    botanicalName: "",
  },
  {
    id: 19,
    essentialName: "CARAWAY OIL",
    botanicalName: "",
  },
  {
    id: 20,
    essentialName: "DAVANA OIL",
    botanicalName: "",
  },
];

export { SpiceOilData };

const AromaticChemicalsData = [
  {
    id: 1,
    essentialName: "ALPHA HUMELENE",
    botanicalName: null,
  },
  {
    id: 2,
    essentialName: "ALPHA PHELLANDRENE",
    botanicalName: null,
  },
  {
    id: 3,
    essentialName: "ALPHA PINENE",
    botanicalName: null,
  },
  {
    id: 4,
    essentialName: "ANETHOLE",
    botanicalName: null,
  },
  {
    id: 5,
    essentialName: "BEETA CARYOPHYLLENE",
    botanicalName: null,
  },
  {
    id: 6,
    essentialName: "BEETA PINENE",
    botanicalName: null,
  },
  {
    id: 7,
    essentialName: "CAMPHENE",
    botanicalName: null,
  },
  {
    id: 8,
    essentialName: "CAMPHOR POWDER",
    botanicalName: null,
  },
  {
    id: 9,
    essentialName: "CUMINIC ALDEHYDE",
    botanicalName: null,
  },
  {
    id: 10,
    essentialName: "CITRAL",
    botanicalName: null,
  },
  {
    id: 11,
    essentialName: "D LIMONENE",
    botanicalName: null,
  },
  {
    id: 12,
    essentialName: "DELTA 3 CARENE",
    botanicalName: null,
  },
  {
    id: 13,
    essentialName: "DIPANTENE",
    botanicalName: null,
  },
  {
    id: 14,
    essentialName: "EUCALYPTOL",
    botanicalName: null,
  },
  {
    id: 15,
    essentialName: "EUGENOL",
    botanicalName: null,
  },
  {
    id: 16,
    essentialName: "GAMMA TERPENENE",
    botanicalName: null,
  },
  {
    id: 17,
    essentialName: "ISO BORNYL ACETATE",
    botanicalName: null,
  },
  {
    id: 18,
    essentialName: "ISO MENTHONE",
    botanicalName: null,
  },
  {
    id: 19,
    essentialName: "ISO POULEGOL",
    botanicalName: null,
  },
  {
    id: 20,
    essentialName: "LINALOOL",
    botanicalName: null,
  },
  {
    id: 21,
    essentialName: "LINALOOL EX BASIL",
    botanicalName: null,
  },
  {
    id: 22,
    essentialName: "LINALYL ACETATE",
    botanicalName: null,
  },
  {
    id: 23,
    essentialName: "METHYL CHAVICOL",
    botanicalName: null,
  },
  {
    id: 24,
    essentialName: "METHYL SALICYLATE",
    botanicalName: null,
  },
  {
    id: 25,
    essentialName: "MYRCENE",
    botanicalName: null,
  },
  {
    id: 26,
    essentialName: "OCIMENE",
    botanicalName: null,
  },
  {
    id: 27,
    essentialName: "PARA CYMENE",
    botanicalName: null,
  },
  {
    id: 28,
    essentialName: "SABINENE",
    botanicalName: null,
  },
  {
    id: 29,
    essentialName: "TERPINENE 4 OL",
    botanicalName: null,
  },
  {
    id: 30,
    essentialName: "TERPINEOL",
    botanicalName: null,
  },
  {
    id: 31,
    essentialName: "TERPINOLENE",
    botanicalName: null,
  },
];
export { AromaticChemicalsData };

const Fragrances_HairOilData = [
  {
    id: 1,
    essentialName: "Almond 202",
    botanicalName: null,
  },
  {
    id: 2,
    essentialName: "Almond Drop",
    botanicalName: null,
  },
  {
    id: 3,
    essentialName: "Almond Fragrance",
    botanicalName: null,
  },
  {
    id: 4,
    essentialName: "Amla",
    botanicalName: null,
  },
  {
    id: 5,
    essentialName: "Amla 505",
    botanicalName: null,
  },
  {
    id: 6,
    essentialName: "Amla 606",
    botanicalName: null,
  },
  {
    id: 7,
    essentialName: "Amla Strong",
    botanicalName: null,
  },
  {
    id: 8,
    essentialName: "Bajaj Almond Type",
    botanicalName: null,
  },
  {
    id: 9,
    essentialName: "Bhrami Amla",
    botanicalName: null,
  },
  {
    id: 10,
    essentialName: "Bhringraj",
    botanicalName: null,
  },
  {
    id: 11,
    essentialName: "Chameli No. 2",
    botanicalName: null,
  },
  {
    id: 12,
    essentialName: "Chameli No. 4",
    botanicalName: null,
  },
  {
    id: 13,
    essentialName: "Jasmine B",
    botanicalName: null,
  },
  {
    id: 14,
    essentialName: "Keshkala",
    botanicalName: null,
  },
  {
    id: 15,
    essentialName: "Keshraj",
    botanicalName: null,
  },
  {
    id: 16,
    essentialName: "Lily S",
    botanicalName: null,
  },
  {
    id: 17,
    essentialName: "Navratan 2",
    botanicalName: null,
  },
  {
    id: 18,
    essentialName: "Navratan Mod",
    botanicalName: null,
  },
  {
    id: 19,
    essentialName: "Navratan Supercool",
    botanicalName: null,
  },
  {
    id: 20,
    essentialName: "Icy cool",
    botanicalName: null,
  },
  {
    id: 21,
    essentialName: "Icymate",
    botanicalName: null,
  },
  {
    id: 22,
    essentialName: "Icydrake",
    botanicalName: null,
  },
  {
    id: 23,
    essentialName: "HimSagar",
    botanicalName: null,
  },
  {
    id: 24,
    essentialName: "Meditation",
    botanicalName: null,
  },
  {
    id: 25,
    essentialName: "coconut",
    botanicalName: null,
  },
  {
    id: 26,
    essentialName: "Mogra",
    botanicalName: null,
  },
  {
    id: 27,
    essentialName: "Sea Breeze",
    botanicalName: null,
  },
  {
    id: 28,
    essentialName: "Saffron 202",
    botanicalName: null,
  },
  {
    id: 29,
    essentialName: "Shikakai",
    botanicalName: null,
  },
  {
    id: 30,
    essentialName: "Heena",
    botanicalName: null,
  },
  {
    id: 31,
    essentialName: "Neem",
    botanicalName: null,
  },
];
export { Fragrances_HairOilData };

const Fragrances_CreamLotionData = [
  {
    id: 1,
    essentialName: "Aqua flor",
    botanicalName: null,
  },
  {
    id: 2,
    essentialName: "Bogart",
    botanicalName: null,
  },
  {
    id: 3,
    essentialName: "Bon Bon",
    botanicalName: null,
  },
  {
    id: 4,
    essentialName: "C.K",
    botanicalName: null,
  },
  {
    id: 5,
    essentialName: "Charmis M",
    botanicalName: null,
  },
  {
    id: 6,
    essentialName: "Charms",
    botanicalName: null,
  },
  {
    id: 7,
    essentialName: "Crazy (M)",
    botanicalName: null,
  },
  {
    id: 8,
    essentialName: "Eau de Belle",
    botanicalName: null,
  },
  {
    id: 9,
    essentialName: "Fahrenheit",
    botanicalName: null,
  },
  {
    id: 10,
    essentialName: "Fair & Natural",
    botanicalName: null,
  },
  {
    id: 11,
    essentialName: "Fair-ever Saffron",
    botanicalName: null,
  },
  {
    id: 12,
    essentialName: "Floral Cream",
    botanicalName: null,
  },
  {
    id: 13,
    essentialName: "Forever",
    botanicalName: null,
  },
  {
    id: 14,
    essentialName: "Freeze",
    botanicalName: null,
  },
  {
    id: 15,
    essentialName: "Givago 19",
    botanicalName: null,
  },
  {
    id: 16,
    essentialName: "Herbo Spec",
    botanicalName: null,
  },
  {
    id: 17,
    essentialName: "Aloe V",
    botanicalName: null,
  },
  {
    id: 18,
    essentialName: "Aloe Vera Nal/III",
    botanicalName: null,
  },
  {
    id: 19,
    essentialName: "Amber AB",
    botanicalName: null,
  },
  {
    id: 20,
    essentialName: "Amla 505",
    botanicalName: null,
  },
  {
    id: 21,
    essentialName: "Amla 606",
    botanicalName: null,
  },
  {
    id: 22,
    essentialName: "Applina",
    botanicalName: null,
  },
  {
    id: 23,
    essentialName: "Aquafina",
    botanicalName: null,
  },
  {
    id: 24,
    essentialName: "Arctica",
    botanicalName: null,
  },
  {
    id: 25,
    essentialName: "Benclaire",
    botanicalName: null,
  },
  {
    id: 26,
    essentialName: "Calgary",
    botanicalName: null,
  },
  {
    id: 27,
    essentialName: "Calidem Mod (Medicated)",
    botanicalName: null,
  },
  {
    id: 28,
    essentialName: "Calidem Plus (Medicated)",
    botanicalName: null,
  },
  {
    id: 29,
    essentialName: "Chameli No. 4",
    botanicalName: null,
  },
  {
    id: 30,
    essentialName: "Chameli No.2",
    botanicalName: null,
  },
  {
    id: 31,
    essentialName: "Iceberg",
    botanicalName: null,
  },
  {
    id: 32,
    essentialName: "Lavender Sweet",
    botanicalName: null,
  },
  {
    id: 33,
    essentialName: "Limoni Cool",
    botanicalName: null,
  },
  {
    id: 34,
    essentialName: "Magic",
    botanicalName: null,
  },
  {
    id: 35,
    essentialName: "Musk ©",
    botanicalName: null,
  },
  {
    id: 36,
    essentialName: "Musk Miracle",
    botanicalName: null,
  },
  {
    id: 37,
    essentialName: "NOMARKS",
    botanicalName: null,
  },
  {
    id: 38,
    essentialName: "Ocean",
    botanicalName: null,
  },
  {
    id: 39,
    essentialName: "Sweet Rose (19 C)",
    botanicalName: null,
  },
  {
    id: 40,
    essentialName: "Sweet Rose S4 etc.",
    botanicalName: null,
  },
  {
    id: 41,
    essentialName: "Tuscany",
    botanicalName: null,
  },
  {
    id: 42,
    essentialName: "Champagne 50",
    botanicalName: null,
  },
  {
    id: 43,
    essentialName: "Chanel",
    botanicalName: null,
  },
  {
    id: 44,
    essentialName: "Charlton",
    botanicalName: null,
  },
  {
    id: 45,
    essentialName: "Charmis CL",
    botanicalName: null,
  },
  {
    id: 46,
    essentialName: "Charmis M",
    botanicalName: null,
  },
  {
    id: 47,
    essentialName: "Charmwood",
    botanicalName: null,
  },
  {
    id: 48,
    essentialName: "Chicano",
    botanicalName: null,
  },
  {
    id: 49,
    essentialName: "Chypre",
    botanicalName: null,
  },
  {
    id: 50,
    essentialName: "Citrina",
    botanicalName: null,
  },
  {
    id: 51,
    essentialName: "Citronella",
    botanicalName: null,
  },
  {
    id: 52,
    essentialName: "CK 10",
    botanicalName: null,
  },
  {
    id: 53,
    essentialName: "CK I Premium",
    botanicalName: null,
  },
  {
    id: 54,
    essentialName: "Coffee 06",
    botanicalName: null,
  },
  {
    id: 55,
    essentialName: "Comp. 666",
    botanicalName: null,
  },
  {
    id: 56,
    essentialName: "Comp. 777",
    botanicalName: null,
  },
  {
    id: 57,
    essentialName: "Cream Nal II",
    botanicalName: null,
  },
  {
    id: 58,
    essentialName: "Dazzle",
    botanicalName: null,
  },
  {
    id: 59,
    essentialName: "Debonaire Mod",
    botanicalName: null,
  },
  {
    id: 60,
    essentialName: "Dettol Max (Medicated)",
    botanicalName: null,
  },
  {
    id: 61,
    essentialName: "Dragon Blood",
    botanicalName: null,
  },
  {
    id: 62,
    essentialName: "Drakkar",
    botanicalName: null,
  },
];

export { Fragrances_CreamLotionData };

const FlavoursData = [
  {
    id: 1,
    essentialName: "Mint 101",
    botanicalName: null,
  },
  {
    id: 2,
    essentialName: "Mint 202",
    botanicalName: null,
  },
  {
    id: 3,
    essentialName: "Mint 303",
    botanicalName: null,
  },
  {
    id: 4,
    essentialName: "Mint 404",
    botanicalName: null,
  },
  {
    id: 5,
    essentialName: "Mint 456",
    botanicalName: null,
  },
  {
    id: 6,
    essentialName: "Binaca",
    botanicalName: null,
  },
  {
    id: 7,
    essentialName: "Babbool Mint",
    botanicalName: null,
  },
  {
    id: 8,
    essentialName: "White Toothpaste",
    botanicalName: null,
  },
  {
    id: 9,
    essentialName: "Gel Toothpaste",
    botanicalName: null,
  },
  {
    id: 10,
    essentialName: "Alto",
    botanicalName: null,
  },
  {
    id: 11,
    essentialName: "Meswak 123",
    botanicalName: null,
  },
  {
    id: 12,
    essentialName: "Pepsodent 20",
    botanicalName: null,
  },
  {
    id: 13,
    essentialName: "Cool Master",
    botanicalName: null,
  },
  {
    id: 14,
    essentialName: "Basil Toothpaste (7 Variants)",
    botanicalName: null,
  },
  {
    id: 15,
    essentialName: "Ginger Toothpaste (5 Variants)",
    botanicalName: null,
  },
  {
    id: 16,
    essentialName: "Neem Toothpaste (2 Variants)",
    botanicalName: null,
  },
  {
    id: 17,
    essentialName: "Anise (Saunf) Toothpaste (5 Variants)",
    botanicalName: null,
  },
  {
    id: 18,
    essentialName: "Colgate Type",
    botanicalName: null,
  },
];

export { FlavoursData };

const Fragrances_FacePackData = [
  {
    id: 1,
    essentialName: "Cucumber",
    botanicalName: null,
  },
  {
    id: 2,
    essentialName: "Red Apple",
    botanicalName: null,
  },
  {
    id: 3,
    essentialName: "Fruity Pack",
    botanicalName: null,
  },
  {
    id: 4,
    essentialName: "Cool Apricot",
    botanicalName: null,
  },
  {
    id: 5,
    essentialName: "Chandan SR",
    botanicalName: null,
  },
  {
    id: 6,
    essentialName: "Musk C (For Men)",
    botanicalName: null,
  },
  {
    id: 7,
    essentialName: "Fruit Pack",
    botanicalName: null,
  },
  {
    id: 8,
    essentialName: "Peach",
    botanicalName: null,
  },
  {
    id: 9,
    essentialName: "Guava",
    botanicalName: null,
  },
  {
    id: 10,
    essentialName: "Green Apple",
    botanicalName: null,
  },
  {
    id: 11,
    essentialName: "Herbal Ice",
    botanicalName: null,
  },
  {
    id: 12,
    essentialName: "Fresho Mint",
    botanicalName: null,
  },
  {
    id: 13,
    essentialName: "Aloe Vera",
    botanicalName: null,
  },
  {
    id: 14,
    essentialName: "Fruit Punch",
    botanicalName: null,
  },
  {
    id: 15,
    essentialName: "Santoor Chandan",
    botanicalName: null,
  },
];

export { Fragrances_FacePackData };

const Fragrances_SoapsData = [
  {
    id: 1,
    essentialName: "Almond",
    botanicalName: null,
  },
  {
    id: 2,
    essentialName: "Aloe Vera",
    botanicalName: null,
  },
  {
    id: 3,
    essentialName: "Aramusk",
    botanicalName: null,
  },
  {
    id: 4,
    essentialName: "Bulgari",
    botanicalName: null,
  },
  {
    id: 5,
    essentialName: "Chandan 5R",
    botanicalName: null,
  },
  {
    id: 6,
    essentialName: "Mediimix",
    botanicalName: null,
  },
  {
    id: 7,
    essentialName: "Calidem (Medicated)",
    botanicalName: null,
  },
  {
    id: 8,
    essentialName: "Calidem Mod (Medicated)",
    botanicalName: null,
  },
  {
    id: 9,
    essentialName: "Calidem Plus (Medicated)",
    botanicalName: null,
  },
  {
    id: 10,
    essentialName: "Charmwood",
    botanicalName: null,
  },
  {
    id: 11,
    essentialName: "Cool Mint Faran",
    botanicalName: null,
  },
  {
    id: 12,
    essentialName: "Cucumber",
    botanicalName: null,
  },
  {
    id: 13,
    essentialName: "Ezrina 83",
    botanicalName: null,
  },
  {
    id: 14,
    essentialName: "FNG",
    botanicalName: null,
  },
  {
    id: 15,
    essentialName: "Givago",
    botanicalName: null,
  },
  {
    id: 16,
    essentialName: "Lime",
    botanicalName: null,
  },
  {
    id: 17,
    essentialName: "Limoni Cool (For Oil Control Soap)",
    botanicalName: null,
  },
  {
    id: 18,
    essentialName: "Liril",
    botanicalName: null,
  },
  {
    id: 19,
    essentialName: "Lux",
    botanicalName: null,
  },
  {
    id: 20,
    essentialName: "Naturina",
    botanicalName: null,
  },
  {
    id: 21,
    essentialName: "Oasis Lily",
    botanicalName: null,
  },
  {
    id: 22,
    essentialName: "Saffron Pink",
    botanicalName: null,
  },
  {
    id: 23,
    essentialName: "Rose",
    botanicalName: null,
  },
  {
    id: 24,
    essentialName: "Sweet Jasmine",
    botanicalName: null,
  },
  {
    id: 25,
    essentialName: "Beatle",
    botanicalName: null,
  },
  {
    id: 26,
    essentialName: "Herbal Ice",
    botanicalName: null,
  },
  {
    id: 27,
    essentialName: "Lay",
    botanicalName: null,
  },
  {
    id: 28,
    essentialName: "Fizzy Lime",
    botanicalName: null,
  },
  {
    id: 29,
    essentialName: "Santoor Chandan.",
    botanicalName: null,
  },
  {
    id: 30,
    essentialName: "Gingerina",
    botanicalName: null,
  },
  {
    id: 31,
    essentialName: "Citrina",
    botanicalName: null,
  },
  {
    id: 32,
    essentialName: "Lemon Bogart",
    botanicalName: null,
  },
  {
    id: 33,
    essentialName: "Mikasi",
    botanicalName: null,
  },
];

export { Fragrances_SoapsData };

const Fragrances_TalcumData = [
  {
    id: 1,
    essentialName: "Mandarina",
    botanicalName: null,
  },
  {
    id: 2,
    essentialName: "Sandal Moss",
    botanicalName: null,
  },
  {
    id: 3,
    essentialName: "Sandal Moss VI",
    botanicalName: null,
  },
  {
    id: 4,
    essentialName: "Sanora",
    botanicalName: null,
  },
  {
    id: 5,
    essentialName: "Serena",
    botanicalName: null,
  },
  {
    id: 6,
    essentialName: "Sweet Almond",
    botanicalName: null,
  },
  {
    id: 7,
    essentialName: "Wonder Aloe (For Moisturising Soap)",
    botanicalName: null,
  },
  {
    id: 8,
    essentialName: "Calypso Lavender",
    botanicalName: null,
  },
  {
    id: 9,
    essentialName: "Dream Flower",
    botanicalName: null,
  },
  {
    id: 10,
    essentialName: "Escada Lavender",
    botanicalName: null,
  },
  {
    id: 11,
    essentialName: "Givago",
    botanicalName: null,
  },
  {
    id: 12,
    essentialName: "Jeans M",
    botanicalName: null,
  },
  {
    id: 13,
    essentialName: "Magic",
    botanicalName: null,
  },
  {
    id: 14,
    essentialName: "Sea Breeze",
    botanicalName: null,
  },
  {
    id: 15,
    essentialName: "Sandal Moss",
    botanicalName: null,
  },
  {
    id: 16,
    essentialName: "Portafina",
    botanicalName: null,
  },
  {
    id: 17,
    essentialName: "Sea Breeze",
    botanicalName: null,
  },
];

export { Fragrances_TalcumData };

const Fragrances_CandlesIncenseSticks = [
  {
    id: 1,
    essentialName: "Warm Spice",
    botanicalName: null,
  },
  {
    id: 2,
    essentialName: "Violet",
    botanicalName: null,
  },
  {
    id: 3,
    essentialName: "Meditation",
    botanicalName: null,
  },
  {
    id: 4,
    essentialName: "Yellow Musk",
    botanicalName: null,
  },
  {
    id: 5,
    essentialName: "Sensual Therapy",
    botanicalName: null,
  },
  {
    id: 6,
    essentialName: "Orion",
    botanicalName: null,
  },
  {
    id: 7,
    essentialName: "Sandalwood",
    botanicalName: null,
  },
  {
    id: 8,
    essentialName: "Jasmine",
    botanicalName: null,
  },
  {
    id: 9,
    essentialName: "Fruity",
    botanicalName: null,
  },
  {
    id: 10,
    essentialName: "Vanilla",
    botanicalName: null,
  },
  {
    id: 11,
    essentialName: "Green Apple",
    botanicalName: null,
  },
  {
    id: 12,
    essentialName: "Lavender",
    botanicalName: null,
  },
  {
    id: 13,
    essentialName: "Citrus",
    botanicalName: null,
  },
  {
    id: 14,
    essentialName: "Orange",
    botanicalName: null,
  },
  {
    id: 15,
    essentialName: "Rose",
    botanicalName: null,
  },
  {
    id: 16,
    essentialName: "Cedarwood",
    botanicalName: null,
  },
  {
    id: 17,
    essentialName: "Lemon",
    botanicalName: null,
  },
  {
    id: 18,
    essentialName: "Ocean Blue",
    botanicalName: null,
  },
  {
    id: 19,
    essentialName: "Flower Bouquet",
    botanicalName: null,
  },
  {
    id: 20,
    essentialName: "Gulkand",
    botanicalName: null,
  },
  {
    id: 21,
    essentialName: "Dragon Blood",
    botanicalName: null,
  },
  {
    id: 22,
    essentialName: "Earth",
    botanicalName: null,
  },
  {
    id: 23,
    essentialName: "Meditation",
    botanicalName: null,
  },
  {
    id: 24,
    essentialName: "Spiritual Guide",
    botanicalName: null,
  },
  {
    id: 25,
    essentialName: "Wild Berry",
    botanicalName: null,
  },
  {
    id: 26,
    essentialName: "Full Moon",
    botanicalName: null,
  },
  {
    id: 27,
    essentialName: "Peppermint",
    botanicalName: null,
  },
  {
    id: 28,
    essentialName: "Herbal Green",
    botanicalName: null,
  },
  {
    id: 29,
    essentialName: "Khus",
    botanicalName: null,
  },
  {
    id: 30,
    essentialName: "Coffee",
    botanicalName: null,
  },
];

export { Fragrances_CandlesIncenseSticks };

const Fragrances_PersonalAersolsAirFreshnersData = [
  {
    id: 1,
    essentialName: "Ambro Musk",
    botanicalName: null,
  },
  {
    id: 2,
    essentialName: "Aqua Flor",
    botanicalName: null,
  },
  {
    id: 3,
    essentialName: "Armani",
    botanicalName: null,
  },
  {
    id: 4,
    essentialName: "Armani MOD",
    botanicalName: null,
  },
  {
    id: 5,
    essentialName: "Arpege",
    botanicalName: null,
  },
  {
    id: 6,
    essentialName: "Bogart",
    botanicalName: null,
  },
  {
    id: 7,
    essentialName: "Bogarti",
    botanicalName: null,
  },
  {
    id: 8,
    essentialName: "Bon Bon",
    botanicalName: null,
  },
  {
    id: 9,
    essentialName: "Brut",
    botanicalName: null,
  },
  {
    id: 10,
    essentialName: "Bulgari",
    botanicalName: null,
  },
  {
    id: 11,
    essentialName: "C.K",
    botanicalName: null,
  },
  {
    id: 12,
    essentialName: "Caribean Beach M",
    botanicalName: null,
  },
  {
    id: 13,
    essentialName: "Cartier",
    botanicalName: null,
  },
  {
    id: 14,
    essentialName: "Centurian",
    botanicalName: null,
  },
  {
    id: 15,
    essentialName: "Centurian CM",
    botanicalName: null,
  },
  {
    id: 16,
    essentialName: "Channel 27",
    botanicalName: null,
  },
  {
    id: 17,
    essentialName: "Channel 27 (M)",
    botanicalName: null,
  },
  {
    id: 18,
    essentialName: "Channel 5",
    botanicalName: null,
  },
  {
    id: 19,
    essentialName: "Channel Musk",
    botanicalName: null,
  },
  {
    id: 20,
    essentialName: "Charlie Boss",
    botanicalName: null,
  },
  {
    id: 21,
    essentialName: "Charmis M",
    botanicalName: null,
  },
  {
    id: 22,
    essentialName: "Coronation",
    botanicalName: null,
  },
  {
    id: 23,
    essentialName: "Desire CL",
    botanicalName: null,
  },
  {
    id: 24,
    essentialName: "Eau de Belle",
    botanicalName: null,
  },
  {
    id: 25,
    essentialName: "Eau de Rochas",
    botanicalName: null,
  },
  {
    id: 26,
    essentialName: "Escada",
    botanicalName: null,
  },
  {
    id: 27,
    essentialName: "Escape",
    botanicalName: null,
  },
  {
    id: 28,
    essentialName: "Escolate",
    botanicalName: null,
  },
  {
    id: 29,
    essentialName: "Ezrina",
    botanicalName: null,
  },
  {
    id: 30,
    essentialName: "Fahrenheit S",
    botanicalName: null,
  },
  {
    id: 31,
    essentialName: "Forever",
    botanicalName: null,
  },
  {
    id: 32,
    essentialName: "Gold (M)",
    botanicalName: null,
  },
  {
    id: 33,
    essentialName: "Givenchi’s Pie-C",
    botanicalName: null,
  },
  {
    id: 34,
    essentialName: "Hugo",
    botanicalName: null,
  },
  {
    id: 35,
    essentialName: "Hugo Boss",
    botanicalName: null,
  },
  {
    id: 36,
    essentialName: "In Love Again",
    botanicalName: null,
  },
  {
    id: 37,
    essentialName: "Jonquil",
    botanicalName: null,
  },
  {
    id: 38,
    essentialName: "Lily 5 e",
    botanicalName: null,
  },
  {
    id: 39,
    essentialName: "Maxiflor",
    botanicalName: null,
  },
  {
    id: 40,
    essentialName: "Maxferrari M",
    botanicalName: null,
  },
  {
    id: 41,
    essentialName: "Mitsuki",
    botanicalName: null,
  },
  {
    id: 42,
    essentialName: "Musk Miracle C",
    botanicalName: null,
  },
  {
    id: 43,
    essentialName: "Ocean",
    botanicalName: null,
  },
  {
    id: 44,
    essentialName: "Pace",
    botanicalName: null,
  },
  {
    id: 45,
    essentialName: "Poison",
    botanicalName: null,
  },
  {
    id: 46,
    essentialName: "Private Number",
    botanicalName: null,
  },
  {
    id: 47,
    essentialName: "Richie Rich",
    botanicalName: null,
  },
  {
    id: 48,
    essentialName: "Richmond Green",
    botanicalName: null,
  },
  {
    id: 49,
    essentialName: "Richmond Pink",
    botanicalName: null,
  },
  {
    id: 50,
    essentialName: "Safari King",
    botanicalName: null,
  },
  {
    id: 51,
    essentialName: "Safari Queen",
    botanicalName: null,
  },
  {
    id: 52,
    essentialName: "Sensation",
    botanicalName: null,
  },
  {
    id: 53,
    essentialName: "Senturian",
    botanicalName: null,
  },
  {
    id: 54,
    essentialName: "Spice Carnation",
    botanicalName: null,
  },
  {
    id: 55,
    essentialName: "Stetson",
    botanicalName: null,
  },
  {
    id: 56,
    essentialName: "Stetson Fluer",
    botanicalName: null,
  },
  {
    id: 57,
    essentialName: "Stetson Mod",
    botanicalName: null,
  },
  {
    id: 58,
    essentialName: "Sumatra Rains",
    botanicalName: null,
  },
  {
    id: 59,
    essentialName: "Sweet Rose S3",
    botanicalName: null,
  },
  {
    id: 60,
    essentialName: "Senturian",
    botanicalName: null,
  },
  {
    id: 61,
    essentialName: "Senturion CM",
    botanicalName: null,
  },
  {
    id: 62,
    essentialName: "Shalimar M",
    botanicalName: null,
  },
  {
    id: 63,
    essentialName: "Tiffani C",
    botanicalName: null,
  },
  {
    id: 64,
    essentialName: "Vallentna",
    botanicalName: null,
  },
  {
    id: 65,
    essentialName: "Vennisa",
    botanicalName: null,
  },
  {
    id: 66,
    essentialName: "Zaccolade",
    botanicalName: null,
  },
  {
    id: 67,
    essentialName: "Zaccolate",
    botanicalName: null,
  },
  {
    id: 68,
    essentialName: "Amber AB",
    botanicalName: null,
  },
  {
    id: 69,
    essentialName: "Applina",
    botanicalName: null,
  },
  {
    id: 70,
    essentialName: "Aquafina",
    botanicalName: null,
  },
  {
    id: 71,
    essentialName: "Arctica",
    botanicalName: null,
  },
  {
    id: 72,
    essentialName: "Benclaire",
    botanicalName: null,
  },
  {
    id: 73,
    essentialName: "Calgary",
    botanicalName: null,
  },
  {
    id: 74,
    essentialName: "Champagne 50",
    botanicalName: null,
  },
  {
    id: 75,
    essentialName: "Chanel",
    botanicalName: null,
  },
  {
    id: 76,
    essentialName: "Charlton",
    botanicalName: null,
  },
  {
    id: 77,
    essentialName: "Charmis CL",
    botanicalName: null,
  },
  {
    id: 78,
    essentialName: "Charmis M",
    botanicalName: null,
  },
  {
    id: 79,
    essentialName: "Charmwood",
    botanicalName: null,
  },
  {
    id: 80,
    essentialName: "Chicano",
    botanicalName: null,
  },
  {
    id: 81,
    essentialName: "Chypre",
    botanicalName: null,
  },
  {
    id: 82,
    essentialName: "Citrina",
    botanicalName: null,
  },
  {
    id: 83,
    essentialName: "CK 10",
    botanicalName: null,
  },
  {
    id: 84,
    essentialName: "CK I Premium",
    botanicalName: null,
  },
  {
    id: 85,
    essentialName: "Dazzle",
    botanicalName: null,
  },
  {
    id: 86,
    essentialName: "Debonaire Mod",
    botanicalName: null,
  },
  {
    id: 87,
    essentialName: "Drakkar",
    botanicalName: null,
  },
  {
    id: 88,
    essentialName: "Drakkar P2",
    botanicalName: null,
  },
  {
    id: 89,
    essentialName: "Dreamland",
    botanicalName: null,
  },
  {
    id: 90,
    essentialName: "Eau de cologne",
    botanicalName: null,
  },
  {
    id: 91,
    essentialName: "Eau de Fleur",
    botanicalName: null,
  },
  {
    id: 92,
    essentialName: "Eau de Russie",
    botanicalName: null,
  },
  {
    id: 93,
    essentialName: "Emron",
    botanicalName: null,
  },
  {
    id: 94,
    essentialName: "Ess Beatle",
    botanicalName: null,
  },
  {
    id: 95,
    essentialName: "Ess Herbal Ice",
    botanicalName: null,
  },
  {
    id: 96,
    essentialName: "Ess Lay",
    botanicalName: null,
  },
  {
    id: 97,
    essentialName: "Ess Perfume",
    botanicalName: null,
  },
  {
    id: 98,
    essentialName: "Ezra",
    botanicalName: null,
  },
  {
    id: 99,
    essentialName: "Fair Banks",
    botanicalName: null,
  },
  {
    id: 100,
    essentialName: "Floramat",
    botanicalName: null,
  },
  {
    id: 101,
    essentialName: "Florina",
    botanicalName: null,
  },
  {
    id: 102,
    essentialName: "Florina",
    botanicalName: null,
  },
  {
    id: 103,
    essentialName: "Floropal",
    botanicalName: null,
  },
  {
    id: 104,
    essentialName: "Fragonard",
    botanicalName: null,
  },
  {
    id: 105,
    essentialName: "Fragonardi",
    botanicalName: null,
  },
  {
    id: 106,
    essentialName: "Ginger Rose",
    botanicalName: null,
  },
  {
    id: 107,
    essentialName: "Gingerina",
    botanicalName: null,
  },
  {
    id: 108,
    essentialName: "Givenchie Pie",
    botanicalName: null,
  },
  {
    id: 109,
    essentialName: "Givencia",
    botanicalName: null,
  },
  {
    id: 110,
    essentialName: "Givencia Mex",
    botanicalName: null,
  },
  {
    id: 111,
    essentialName: "Hugo Men",
    botanicalName: null,
  },
  {
    id: 112,
    essentialName: "Iceberg",
    botanicalName: null,
  },
  {
    id: 113,
    essentialName: "Icy Drake",
    botanicalName: null,
  },
  {
    id: 114,
    essentialName: "Jaffa",
    botanicalName: null,
  },
  {
    id: 115,
    essentialName: "Jasma Mod",
    botanicalName: null,
  },
  {
    id: 116,
    essentialName: "Jasma Pro",
    botanicalName: null,
  },
  {
    id: 117,
    essentialName: "Jeans Plaza",
    botanicalName: null,
  },
  {
    id: 118,
    essentialName: "Jefferina",
    botanicalName: null,
  },
  {
    id: 119,
    essentialName: "Jennifer",
    botanicalName: null,
  },
  {
    id: 120,
    essentialName: "Jennifer Mod",
    botanicalName: null,
  },
  {
    id: 121,
    essentialName: "Kenzo Men",
    botanicalName: null,
  },
  {
    id: 122,
    essentialName: "Lavina",
    botanicalName: null,
  },
  {
    id: 123,
    essentialName: "Lavina Musk",
    botanicalName: null,
  },
  {
    id: 124,
    essentialName: "Lemon Bogart",
    botanicalName: null,
  },
  {
    id: 125,
    essentialName: "Lime Bogart",
    botanicalName: null,
  },
  {
    id: 126,
    essentialName: "Lotus",
    botanicalName: null,
  },
  {
    id: 127,
    essentialName: "Lyra Mix 2",
    botanicalName: null,
  },
  {
    id: 128,
    essentialName: "Lyra Sweet",
    botanicalName: null,
  },
  {
    id: 129,
    essentialName: "Macassi",
    botanicalName: null,
  },
  {
    id: 130,
    essentialName: "Magicana",
    botanicalName: null,
  },
  {
    id: 131,
    essentialName: "Mandarina",
    botanicalName: null,
  },
  {
    id: 132,
    essentialName: "Marciano",
    botanicalName: null,
  },
  {
    id: 133,
    essentialName: "Meditation",
    botanicalName: null,
  },
  {
    id: 134,
    essentialName: "Melody King",
    botanicalName: null,
  },
  {
    id: 135,
    essentialName: "Melody Queen",
    botanicalName: null,
  },
  {
    id: 136,
    essentialName: "Miss Marry",
    botanicalName: null,
  },
  {
    id: 137,
    essentialName: "Mix Drake",
    botanicalName: null,
  },
  {
    id: 138,
    essentialName: "Montari",
    botanicalName: null,
  },
  {
    id: 139,
    essentialName: "Pamela",
    botanicalName: null,
  },
  {
    id: 140,
    essentialName: "Pantacene",
    botanicalName: null,
  },
  {
    id: 141,
    essentialName: "Portafina",
    botanicalName: null,
  },
  {
    id: 142,
    essentialName: "Rajnigandha",
    botanicalName: null,
  },
  {
    id: 143,
    essentialName: "Rasasi",
    botanicalName: null,
  },
  {
    id: 144,
    essentialName: "Rasasi D",
    botanicalName: null,
  },
  {
    id: 145,
    essentialName: "Red Rose",
    botanicalName: null,
  },
  {
    id: 146,
    essentialName: "Rosaflor",
    botanicalName: null,
  },
  {
    id: 147,
    essentialName: "Rose",
    botanicalName: null,
  },
  {
    id: 148,
    essentialName: "Sabina",
    botanicalName: null,
  },
  {
    id: 149,
    essentialName: "Salora",
    botanicalName: null,
  },
  {
    id: 150,
    essentialName: "Sandalaire",
    botanicalName: null,
  },
  {
    id: 151,
    essentialName: "Sanora",
    botanicalName: null,
  },
  {
    id: 152,
    essentialName: "Satsuma Mod",
    botanicalName: null,
  },
  {
    id: 153,
    essentialName: "Sea Breeze",
    botanicalName: null,
  },
  {
    id: 154,
    essentialName: "Sea Breeze II",
    botanicalName: null,
  },
  {
    id: 155,
    essentialName: "Sea Moss",
    botanicalName: null,
  },
  {
    id: 156,
    essentialName: "Sea Moss",
    botanicalName: null,
  },
  {
    id: 157,
    essentialName: "Serena",
    botanicalName: null,
  },
  {
    id: 158,
    essentialName: "Shagufa Musk",
    botanicalName: null,
  },
  {
    id: 159,
    essentialName: "Shangarila",
    botanicalName: null,
  },
  {
    id: 160,
    essentialName: "Shirin",
    botanicalName: null,
  },
  {
    id: 161,
    essentialName: "Siberian Oak",
    botanicalName: null,
  },
  {
    id: 162,
    essentialName: "Spiritual Guide",
    botanicalName: null,
  },
  {
    id: 163,
    essentialName: "Tangerina",
    botanicalName: null,
  },
  {
    id: 164,
    essentialName: "Travina",
    botanicalName: null,
  },
  {
    id: 165,
    essentialName: "Tressoria M",
    botanicalName: null,
  },
  {
    id: 166,
    essentialName: "Tressoria-M",
    botanicalName: null,
  },
  {
    id: 167,
    essentialName: "Turbulence Ck",
    botanicalName: null,
  },
  {
    id: 168,
    essentialName: "Turbulence Giv",
    botanicalName: null,
  },
  {
    id: 169,
    essentialName: "Mona Darling",
    botanicalName: null,
  },
  {
    id: 170,
    essentialName: "Rose 666",
    botanicalName: null,
  },
  {
    id: 171,
    essentialName: "Lavender P2",
    botanicalName: null,
  },
  {
    id: 172,
    essentialName: "Pimelia",
    botanicalName: null,
  },
  {
    id: 173,
    essentialName: "Mango PF",
    botanicalName: null,
  },
  {
    id: 174,
    essentialName: "Mango FF",
    botanicalName: null,
  },
  {
    id: 175,
    essentialName: "Hexa Pro",
    botanicalName: null,
  },
  {
    id: 176,
    essentialName: "Oliverna",
    botanicalName: null,
  },
  {
    id: 177,
    essentialName: "Sahiba C",
    botanicalName: null,
  },
  {
    id: 178,
    essentialName: "Cranberry",
    botanicalName: null,
  },
  {
    id: 179,
    essentialName: "Dreamline",
    botanicalName: null,
  },
  {
    id: 180,
    essentialName: "CK 100",
    botanicalName: null,
  },
  {
    id: 181,
    essentialName: "Explore",
    botanicalName: null,
  },
  {
    id: 182,
    essentialName: "Latin Beauty",
    botanicalName: null,
  },
  {
    id: 183,
    essentialName: "Niagra Dew",
    botanicalName: null,
  },
  {
    id: 184,
    essentialName: "Baby Lavender",
    botanicalName: null,
  },
  {
    id: 185,
    essentialName: "Afghan Musk",
    botanicalName: null,
  },
  {
    id: 186,
    essentialName: "Musk Bogart",
    botanicalName: null,
  },
  {
    id: 187,
    essentialName: "Marlyn Mex",
    botanicalName: null,
  },
  {
    id: 188,
    essentialName: "Mulberry Touch",
    botanicalName: null,
  },
  {
    id: 189,
    essentialName: "Dutch PIe",
    botanicalName: null,
  },
  {
    id: 190,
    essentialName: "Citralene",
    botanicalName: null,
  },
  {
    id: 191,
    essentialName: "Lady Touch",
    botanicalName: null,
  },
  {
    id: 192,
    essentialName: "Red Stone",
    botanicalName: null,
  },
  {
    id: 193,
    essentialName: "Cidonia",
    botanicalName: null,
  },
  {
    id: 194,
    essentialName: "Juan Carlo",
    botanicalName: null,
  },
  {
    id: 195,
    essentialName: "Fabio",
    botanicalName: null,
  },
  {
    id: 196,
    essentialName: "Oriana",
    botanicalName: null,
  },
  {
    id: 197,
    essentialName: "Georgio",
    botanicalName: null,
  },
  {
    id: 198,
    essentialName: "Catalonia",
    botanicalName: null,
  },
  {
    id: 199,
    essentialName: "Ontaria",
    botanicalName: null,
  },
  {
    id: 200,
    essentialName: "Ezri Maria",
    botanicalName: null,
  },
  {
    id: 201,
    essentialName: "Exquisite",
    botanicalName: null,
  },
  {
    id: 202,
    essentialName: "Tuscana",
    botanicalName: null,
  },
  {
    id: 203,
    essentialName: "Vanilla Lip",
    botanicalName: null,
  },
  {
    id: 204,
    essentialName: "Vanilla Lip Colourless",
    botanicalName: null,
  },
  {
    id: 205,
    essentialName: "Vanilla Mox",
    botanicalName: null,
  },
  {
    id: 206,
    essentialName: "Vasma Plus",
    botanicalName: null,
  },
  {
    id: 207,
    essentialName: "Victor Mod",
    botanicalName: null,
  },
  {
    id: 208,
    essentialName: "Vigil",
    botanicalName: null,
  },
  {
    id: 209,
    essentialName: "Violet",
    botanicalName: null,
  },
  {
    id: 210,
    essentialName: "Vitara",
    botanicalName: null,
  },
  {
    id: 211,
    essentialName: "VItara Mod",
    botanicalName: null,
  },
  {
    id: 212,
    essentialName: "Yardie",
    botanicalName: null,
  },
  {
    id: 213,
    essentialName: "Yellow Musk",
    botanicalName: null,
  },
  {
    id: 214,
    essentialName: "Zeon",
    botanicalName: null,
  },
  {
    id: 215,
    essentialName: "Zirconia",
    botanicalName: null,
  },
];

export { Fragrances_PersonalAersolsAirFreshnersData };
