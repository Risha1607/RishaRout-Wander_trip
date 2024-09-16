/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import { GoogleGenerativeAI } from "@google/generative-ai";


  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image URL, geo coordinates, rating, descriptions, and suggest itinerary with placeName, Place Details, Place Image URL, GeoCoordinates, ticket Pricing, Time to travel each of the locations for 3 days with each day plan with best time to visit in JSON format.\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "## Las Vegas 3-Day Budget Trip for a Couple\n\nThis itinerary focuses on free and budget-friendly activities, maximizing your experience without breaking the bank. \n\n**Hotels (Prices are approximate and may vary)**\n\n**1.  The D Las Vegas**\n* **Address:** 301 Fremont Street, Las Vegas, NV 89101\n* **Price:** $50 - $100 per night\n* **Image URL:** [https://www.thelinq.com/media/images/hotels/the-d-hotel/hotel-exterior-daytime.jpg](https://www.thelinq.com/media/images/hotels/the-d-hotel/hotel-exterior-daytime.jpg)\n* **Geo Coordinates:** 36.1677° N, 115.1393° W\n* **Rating:** 3.5 stars\n* **Description:** Located in the heart of Fremont Street, this hotel offers a vibrant atmosphere, affordable rooms, and easy access to the pedestrian mall with its live entertainment.\n\n**2.  The Golden Nugget Las Vegas**\n* **Address:** 129 E Fremont St, Las Vegas, NV 89101\n* **Price:** $60 - $150 per night\n* **Image URL:** [https://www.goldennugget.com/media/images/default/header/golden-nugget-las-vegas-exterior.jpg](https://www.goldennugget.com/media/images/default/header/golden-nugget-las-vegas-exterior.jpg)\n* **Geo Coordinates:** 36.1679° N, 115.1405° W\n* **Rating:** 4 stars\n* **Description:** A classic Las Vegas hotel with a luxurious feel, The Golden Nugget offers an impressive pool area with a shark tank and a vibrant casino.\n\n**3.  The Orleans Hotel & Casino**\n* **Address:** 4500 W Tropicana Ave, Las Vegas, NV 89103\n* **Price:** $40 - $80 per night\n* **Image URL:** [https://www.orleanscasino.com/media/images/default/header/orleans-hotel-casino-exterior.jpg](https://www.orleanscasino.com/media/images/default/header/orleans-hotel-casino-exterior.jpg)\n* **Geo Coordinates:** 36.0928° N, 115.1669° W\n* **Rating:** 3 stars\n* **Description:** A more affordable option with a relaxed atmosphere, The Orleans offers comfortable rooms, a variety of restaurants, and convenient access to the Strip.\n\n**Itinerary**\n\n```json\n{\n  \"day1\": {\n    \"morning\": {\n      \"placeName\": \"Fremont Street Experience\",\n      \"placeDetails\": \"Free pedestrian mall with live music, street performers, and the iconic Viva Vision light show.\",\n      \"placeImageURL\": \"https://www.fremontstreetexperience.com/media/images/default/header/fremont-street-experience-header-image.jpg\",\n      \"geoCoordinates\": \"36.1675° N, 115.1391° W\",\n      \"ticketPricing\": \"Free\",\n      \"timeToTravel\": \"1-2 hours\"\n    },\n    \"afternoon\": {\n      \"placeName\": \"Neon Museum\",\n      \"placeDetails\": \"Explore historic neon signs from Las Vegas' past.\",\n      \"placeImageURL\": \"https://www.neonmuseum.org/media/images/default/header/neon-museum-header-image.jpg\",\n      \"geoCoordinates\": \"36.1718° N, 115.1323° W\",\n      \"ticketPricing\": \"$25 per person\",\n      \"timeToTravel\": \"1-2 hours\"\n    },\n    \"evening\": {\n      \"placeName\": \"Free Show at The LINQ Promenade\",\n      \"placeDetails\": \"Enjoy free live entertainment at the LINQ Promenade, including acrobatic shows, music, and street performers.\",\n      \"placeImageURL\": \"https://www.thelinq.com/media/images/default/header/the-linq-promenade-header-image.jpg\",\n      \"geoCoordinates\": \"36.1671° N, 115.1435° W\",\n      \"ticketPricing\": \"Free\",\n      \"timeToTravel\": \"1-2 hours\"\n    }\n  },\n  \"day2\": {\n    \"morning\": {\n      \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n      \"placeDetails\": \"Free access to stunning floral displays.\",\n      \"placeImageURL\": \"https://www.bellagio.com/media/images/default/header/bellagio-conservatory-and-botanical-garden-header-image.jpg\",\n      \"geoCoordinates\": \"36.1172° N, 115.1722° W\",\n      \"ticketPricing\": \"Free\",\n      \"timeToTravel\": \"1-2 hours\"\n    },\n    \"afternoon\": {\n      \"placeName\": \"The Strip\",\n      \"placeDetails\": \"Walk along the famous Las Vegas Strip, window shop, and enjoy the vibrant atmosphere.\",\n      \"placeImageURL\": \"https://www.visitlasvegas.com/media/images/default/header/the-strip-header-image.jpg\",\n      \"geoCoordinates\": \"36.1144° N, 115.1737° W\",\n      \"ticketPricing\": \"Free\",\n      \"timeToTravel\": \"2-3 hours\"\n    },\n    \"evening\": {\n      \"placeName\": \"Free Fountain Show at the Bellagio\",\n      \"placeDetails\": \"Watch the impressive water and light show at the Bellagio fountain.\",\n      \"placeImageURL\": \"https://www.bellagio.com/media/images/default/header/bellagio-fountains-header-image.jpg\",\n      \"geoCoordinates\": \"36.1172° N, 115.1722° W\",\n      \"ticketPricing\": \"Free\",\n      \"timeToTravel\": \"1 hour\"\n    }\n  },\n  \"day3\": {\n    \"morning\": {\n      \"placeName\": \"Red Rock Canyon National Conservation Area\",\n      \"placeDetails\": \"Enjoy hiking, scenic drives, and rock formations in the Red Rock Canyon.\",\n      \"placeImageURL\": \"https://www.nps.gov/redr/planyourvisit/images/100615.jpg\",\n      \"geoCoordinates\": \"36.1268° N, 115.2886° W\",\n      \"ticketPricing\": \"$15 per vehicle\",\n      \"timeToTravel\": \"3-4 hours\"\n    },\n    \"afternoon\": {\n      \"placeName\": \"Hoover Dam\",\n      \"placeDetails\": \"Tour the impressive Hoover Dam, a landmark of engineering and a popular tourist destination.\",\n      \"placeImageURL\": \"https://www.usbr.gov/lc/hooverdam/images/hooverdam_exterior.jpg\",\n      \"geoCoordinates\": \"36.0145° N, 114.9678° W\",\n      \"ticketPricing\": \"Tour prices vary, but you can usually find affordable options.\",\n      \"timeToTravel\": \"2-3 hours\"\n    },\n    \"evening\": {\n      \"placeName\": \"Free Street Performance at Fremont Street\",\n      \"placeDetails\": \"Enjoy a final night of free entertainment at Fremont Street Experience.\",\n      \"placeImageURL\": \"https://www.fremontstreetexperience.com/media/images/default/header/fremont-street-experience-header-image.jpg\",\n      \"geoCoordinates\": \"36.1675° N, 115.1391° W\",\n      \"ticketPricing\": \"Free\",\n      \"timeToTravel\": \"1-2 hours\"\n    }\n  }\n}\n```\n\n**Tips for a Budget-Friendly Trip:**\n\n* **Pack snacks and drinks:** Avoid overpriced snacks and drinks at the casinos.\n* **Take advantage of free activities:** Many attractions in Las Vegas offer free shows, concerts, and events.\n* **Utilize public transportation:** The Las Vegas Monorail is a convenient and affordable way to get around the Strip.\n* **Dine at off-peak hours:** Lunch prices are generally lower than dinner.\n* **Consider a hotel with a free breakfast:** This can help you save money on meals.\n\nThis itinerary is just a suggestion. You can customize it based on your interests and budget. Enjoy your trip to Las Vegas! \n"},
          ],
        },
      ],
    });
  
