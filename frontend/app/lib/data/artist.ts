export const artist = {
  name: "The Lucky Effect",
  links: {
    spotify: "https://open.spotify.com/artist/example", 
    apple: "https://music.apple.com/us/artist/the-lucky-effect/1790610682"
  },
  genres: ["Alternative", "Indie Rock", "Pop"],
  discography: {
    singles: [
      {
        type: "single",
        name: "Call it love?",
        cover_image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/58/b7/08/58b70871-caa4-c535-6452-c1ffc8be68bf/artwork.jpg/316x316bb.webp", 
        total_tracks: 1,
        tracks: [
          { 
            name: "Call it love?", 
            links: {
              spotify: "https://open.spotify.com/album/2UQkDhf3Z9dfjPheh5ERed",
              apple: "https://music.apple.com/us/album/call-it-love-single/1790989661"
            }
          }
        ], 
        released: new Date("2025-01-15"), 
        links: {
          spotify: "https://open.spotify.com/album/2UQkDhf3Z9dfjPheh5ERed",
              apple: "https://music.apple.com/us/album/call-it-love-single/1790989661"
        }
      },
      {
        type: "single",
        name: "Anhedonia (Desert of Real)",
        cover_image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/5e/02/245e023d-600a-cc62-cfd9-fa79c5f312b8/artwork.jpg/316x316bb.webp",
        total_tracks: 1,
        tracks: [
          {
            name: "Anhedonia (Desert of Real)",
            links: {
              spotify: "https://open.spotify.com/album/5KihQTbxWIGSzJqPXIdj45",
              apple: "https://music.apple.com/us/album/anhedonia-desert-of-real-single/1798306727"
            }
          }
        ],
        released: new Date("2025-03-20"),
        links: {
          spotify: "https://open.spotify.com/album/5KihQTbxWIGSzJqPXIdj45",
          apple: "https://music.apple.com/us/album/anhedonia-desert-of-real-single/1798306727"
        }
      }
    ],
    albums: [
      {
        type: "ep",
        name: "POYS - EP",
        cover_image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a1/18/38/a1183867-d8eb-0cae-e6b4-e254c9d38b09/artwork.jpg/316x316bb.webp",
        total_tracks: 4,
        tracks: [
          { 
            name: "TRY TO", 
            links: { spotify: "https://open.spotify.com/track/7GQhaihWmNEHA8oOexLo5B?si=1d9c9074def8424e", apple: "https://music.apple.com/us/song/try-to/1892925339" } 
          },
          { 
            name: "DAMN SPECIAL", 
            links: { spotify: "https://open.spotify.com/track/65DEKL74T4JK2zvHJwH3d0?si=d948eeb0593b40ac", apple: "https://music.apple.com/us/song/damn-special/1892925341" } 
          },
          { 
            name: "MONET", 
            links: { spotify: "https://open.spotify.com/track/3VMzuD5gqoofRCaDORiT9c?si=d416e2ea05a54c3d", apple: "https://music.apple.com/us/song/monet/1892925342" } 
          },
          { 
            name: "WATCH YOUR SPEED", 
            links: { spotify: "https://open.spotify.com/track/3b2WFL7xRklRWFdLUON8nq?si=3d36c116b3694401", apple: "https://music.apple.com/us/song/watch-your-speed/1892925343" } 
          }
        ],
        released: new Date("2025-06-05"),
        links: {
          spotify: "https://open.spotify.com/album/3EIROpHoCPePHdaaXySpms",
          apple: "https://music.apple.com/us/album/poys-ep/1892925338"
        }
      }
    ],
    appears_on: []
  }
};