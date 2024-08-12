import React from "react";
import ReactDOM from "react-dom";

/*
Header
 - Logo
 - Nav items
Body
 - Search
 - Restaurant Container
    - Restaurant Card
      -Img
      -Star Rating
      -Cuisines
      -Delivery Time
Footer
  -Copyright
  -Links
  -Address
  -Contact
*/

const RestaurantCard = (props) => {
  const { resData } = props;
  const {name, cuisines,avgRating,sla,cloudinaryImageId} = resData.info;
  console.log(resData);
  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/" +
          cloudinaryImageId
        }
      />
      <h4>
        {name}
      </h4>
      <h4>
        {cuisines.join(
          ","
        )}
      </h4>
      <h4>
        {avgRating}
      </h4>
      <h4>
        {
          sla
            .deliveryTime
        }
      </h4>
    </div>
  );
};

const resObj = {
  restaurants: [
    {
      info: {
        id: "624070",
        name: "Chinese Wok",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        locality: "Gautam Buddha Nagar",
        areaName: "Gaur City 1",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 4.1,
        parentId: "61955",
        avgRatingString: "4.1",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 2.5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-12 02:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹199",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/chinese-wok-gautam-buddha-nagar-gaur-city-1-noida-624070",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "651644",
        name: "Subway",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/2/df323279-b372-46ea-9cc0-8e5f445a0cac_651644.jpg",
        locality: "Gautam Buddha Nagar",
        areaName: "Gaur City 1",
        costForTwo: "₹350 for two",
        cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
        avgRating: 4.2,
        parentId: "2",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 1.3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-12 01:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/subway-gautam-buddha-nagar-gaur-city-1-noida-651644",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "147910",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "ux1ryy9yqhrqwznhl3ju",
        locality: "Mahagun Mart",
        areaName: "Gaur City 2",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4.1,
        parentId: "4961",
        avgRatingString: "4.1",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 4.4,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "4.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-11 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Pizza.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-mahagun-mart-gaur-city-2-noida-147910",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "407887",
        name: "The Belgian Waffle Co.",
        cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
        locality: "Orbit Plaza",
        areaName: "crossing republic",
        costForTwo: "₹200 for two",
        cuisines: ["Waffle", "Desserts", "Ice Cream"],
        avgRating: 4.4,
        veg: true,
        parentId: "2233",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 42,
          lastMileTravel: 4.2,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "4.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-12 03:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-orbit-plaza-crossing-republic-noida-407887",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "697981",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/79177e4b-5899-41b9-9ecb-5813a1327a7e_697981.jpg",
        locality: "Town Center",
        areaName: "Greater Noida",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.4,
        parentId: "166",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 0.6,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "0.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-12 04:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Burger.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹139",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/burger-king-town-center-greater-noida-noida-697981",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "352737",
        name: "UBQ BY Barbeque Nation",
        cloudinaryImageId: "gnoatstgumljssdj1qxu",
        locality: "Sector 4",
        areaName: "Gaur City 1",
        costForTwo: "₹300 for two",
        cuisines: ["Barbecue", "Biryani", "Kebabs", "Mughlai", "Desserts"],
        avgRating: 4,
        parentId: "10804",
        avgRatingString: "4.0",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 47,
          lastMileTravel: 2.6,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "2.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-11 23:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹199",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-sector-4-gaur-city-1-noida-352737",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "340381",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_340381.JPG",
        locality: "Sector 4",
        areaName: "Gaur City 1",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 4.3,
        parentId: "547",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 17,
          lastMileTravel: 1.2,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "1.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-11 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Burger.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kfc-sector-4-gaur-city-1-noida-340381",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "623617",
        name: "Great Indian Khichdi by EatFit",
        cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
        locality: "C R Marg",
        areaName: "Shahberi",
        costForTwo: "₹200 for two",
        cuisines: ["Indian", "Home Food", "Healthy Food", "Snacks"],
        avgRating: 4.5,
        veg: true,
        parentId: "319582",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 2.9,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-12 00:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "brand",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "brand",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-c-r-marg-shahberi-noida-623617",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "624071",
        name: "Big Bowl",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_624071.JPG",
        locality: "Gautam Buddha Nagar",
        areaName: "Gaur City 1",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Tibetan", "Desserts"],
        avgRating: 4.2,
        parentId: "434792",
        avgRatingString: "4.2",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 2.5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-12 02:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹199",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/big-bowl-gautam-buddha-nagar-gaur-city-1-noida-624071",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "718117",
        name: "McDonald's",
        cloudinaryImageId: "535fc9f9c135f7982317bbb6a64a1ffc",
        locality: "Golden I",
        areaName: "Crossing Republic",
        costForTwo: "₹400 for two",
        cuisines: ["American", "Fast Food"],
        avgRating: 4.5,
        parentId: "630",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 3.6,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-11 22:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Burger.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/mcdonalds-golden-i-crossing-republic-noida-718117",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "751374",
        name: "Theobroma",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/72a59903-9200-4826-a10f-3d1600082d12_751374.jpg",
        locality: "Golden I",
        areaName: "Gautam Budh Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Bakery", "Desserts"],
        avgRating: 4.5,
        parentId: "1040",
        avgRatingString: "4.5",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 3.5,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "3.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-11 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Desserts.png",
              description: "Delivery!",
            },
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Desserts.png",
                  },
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/theobroma-golden-i-gautam-budh-nagar-noida-751374",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "336917",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/8e5c3aa8-d941-4aa9-bad6-759ce1808825_336917.jpg",
        locality: "Haibatpur Road",
        areaName: "Crossing Republic",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4,
        parentId: "721",
        avgRatingString: "4.0",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-12 01:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Pizza.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹189",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pizza-hut-haibatpur-road-crossing-republic-noida-336917",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "173389",
        name: "The Good Bowl",
        cloudinaryImageId: "6e04be27387483a7c00444f8e8241108",
        locality: "Gaur Global Village",
        areaName: "crossing republic",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Pastas",
          "Punjabi",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.4,
        parentId: "7918",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 4.1,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "4.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-11 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹90",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/the-good-bowl-gaur-global-village-crossing-republic-noida-173389",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "574327",
        name: "NH1 Bowls - Highway To North",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/bbb653ed-0854-48d8-a2fc-324e0ebc4d7b_574327.JPG",
        locality: "Sector 16 B",
        areaName: "crossing republic",
        costForTwo: "₹250 for two",
        cuisines: ["North Indian", "Punjabi", "Home Food"],
        avgRating: 4.6,
        parentId: "22452",
        avgRatingString: "4.6",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 0.6,
          serviceability: "SERVICEABLE",
          slaString: "15-25 mins",
          lastMileTravelString: "0.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-12 02:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-sector-16-b-crossing-republic-noida-574327",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "643850",
        name: "WeFit - Protein Bowls, Salads & Sandwiches",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/81bf516c-205c-44b8-9bb2-74aa62529d26_643850.JPG",
        locality: "Shri Radha Sky Gardens",
        areaName: "Sector 16 B",
        costForTwo: "₹250 for two",
        cuisines: ["Healthy Food", "Salads", "Keto", "Snacks"],
        avgRating: 4.5,
        parentId: "355285",
        avgRatingString: "4.5",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 0.6,
          serviceability: "SERVICEABLE",
          slaString: "20-30 mins",
          lastMileTravelString: "0.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-12 02:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Guiltfree.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Guiltfree.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/wefit-protein-bowls-salads-and-sandwiches-shri-radha-sky-gardens-sector-16-b-noida-643850",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "750415",
        name: "Daily Kitchen - Homely Meals",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/8a1d8aae-63c3-4033-a8b4-5d0eac490c8f_750415.JPG",
        locality: "Greater Noida West",
        areaName: "Ek murti",
        costForTwo: "₹400 for two",
        cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
        avgRating: 4.2,
        parentId: "444382",
        avgRatingString: "4.2",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 0.6,
          serviceability: "SERVICEABLE",
          slaString: "20-30 mins",
          lastMileTravelString: "0.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-12 02:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/daily-kitchen-homely-meals-greater-west-ek-murti-noida-750415",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "348936",
        name: "Hira Sweets",
        cloudinaryImageId: "wtwhar7auvi9tqisguh9",
        locality: "sapphire mall",
        areaName: "Sector 4",
        costForTwo: "₹500 for two",
        cuisines: [
          "North Indian",
          "South Indian",
          "Chinese",
          "Continental",
          "Bakery",
          "Street Food",
          "Sweets",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.1,
        veg: true,
        parentId: "5155",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 1.2,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-12 00:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Mithai.png",
              description: "Delivery!",
            },
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Mithai.png",
                  },
                },
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/hira-sweets-sapphire-mall-sector-4-noida-348936",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "623618",
        name: "Ghar ka Khana by EatFit",
        cloudinaryImageId: "1d578bb732e03c6f591790eb7d2d88e2",
        locality: "C R Marg",
        areaName: "Shahberi",
        costForTwo: "₹250 for two",
        cuisines: [
          "Home Food",
          "North Indian",
          "Healthy Food",
          "Thalis",
          "Desserts",
          "Indian",
          "Punjabi",
        ],
        avgRating: 4.3,
        veg: true,
        parentId: "422576",
        avgRatingString: "4.3",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 2.9,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-12 00:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/ghar-ka-khana-by-eatfit-c-r-marg-shahberi-noida-623618",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "423981",
        name: "Domino's Pizza",
        cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
        locality: "Amrapali Leisure Valley",
        areaName: "Amrapali Dream Valley",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.2,
        parentId: "2456",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 1.1,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-12 00:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Pizza.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "1.5",
            ratingCount: "100+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/dominos-pizza-amrapali-leisure-valley-amrapali-dream-valley-noida-423981",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "623620",
        name: "HRX by EatFit",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/1/5c25823c-7f81-42de-8bd3-353926dd46f0_623620.jpg",
        locality: "C R Marg",
        areaName: "crossing republic",
        costForTwo: "₹450 for two",
        cuisines: ["Healthy Food", "Salads", "Burgers"],
        avgRating: 4.5,
        parentId: "335529",
        avgRatingString: "4.5",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 2.9,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-12 00:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Guiltfree.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Guiltfree.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/hrx-by-eatfit-c-r-marg-crossing-republic-noida-623620",
        type: "WEBLINK",
      },
    },
  ],
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resObj.restaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
        }
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/jpeg;base64,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"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
