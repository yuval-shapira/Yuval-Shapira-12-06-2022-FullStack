
export default async function getCitiesListAPI(cityName) {
    const dataTest = [
        {
          Version: 1,
          Key: "10",
          Type: "City",
          Rank: 31,
          LocalizedName: "Tel Aviv 1",
          Country: {
            ID: "IL",
            LocalizedName: "Israel"
          },
          AdministrativeArea: {
            ID: "TA",
            LocalizedName: "Tel Aviv"
          }
        },
        {
            Version: 1,
            Key: "11",
            Type: "City",
            Rank: 31,
            LocalizedName: "Tel Aviv 2",
            Country: {
              ID: "IL",
              LocalizedName: "Israel"
            },
            AdministrativeArea: {
              ID: "TA",
              LocalizedName: "Tel Aviv"
            }
          },
          {
            Version: 1,
            Key: "12",
            Type: "City",
            Rank: 31,
            LocalizedName: "Tel Aviv 3",
            Country: {
              ID: "IL",
              LocalizedName: "Israel"
            },
            AdministrativeArea: {
              ID: "TA",
              LocalizedName: "Tel Aviv"
            }
          },
          {
            Version: 1,
            Key: "13",
            Type: "City",
            Rank: 31,
            LocalizedName: "Tel Aviv 4",
            Country: {
              ID: "IL",
              LocalizedName: "Israel"
            },
            AdministrativeArea: {
              ID: "TA",
              LocalizedName: "Tel Aviv"
            }
          },
          {
            Version: 1,
            Key: "14",
            Type: "City",
            Rank: 31,
            LocalizedName: "Tel Aviv 5",
            Country: {
              ID: "IL",
              LocalizedName: "Israel"
            },
            AdministrativeArea: {
              ID: "TA",
              LocalizedName: "Tel Aviv"
            }
          },
          {
            Version: 1,
            Key: "15",
            Type: "City",
            Rank: 31,
            LocalizedName: "Tel Aviv 6",
            Country: {
              ID: "IL",
              LocalizedName: "Israel"
            },
            AdministrativeArea: {
              ID: "TA",
              LocalizedName: "Tel Aviv"
            }
          },
          {
            Version: 1,
            Key: "16",
            Type: "City",
            Rank: 31,
            LocalizedName: "Tel Aviv 7",
            Country: {
              ID: "IL",
              LocalizedName: "Israel"
            },
            AdministrativeArea: {
              ID: "TA",
              LocalizedName: "Tel Aviv"
            }
          },
          {
            Version: 1,
            Key: "17",
            Type: "City",
            Rank: 31,
            LocalizedName: "Tel Aviv 8",
            Country: {
              ID: "IL",
              LocalizedName: "Israel"
            },
            AdministrativeArea: {
              ID: "TA",
              LocalizedName: "Tel Aviv"
            }
          },

      ]

    return dataTest;

    // try{
    // const url = `http://localhost:3030/api/city/citiesList/${cityName}`;
    // const response = await fetch(url);
    // const data = await response.json();
    // return data;
    // }
    // catch(err){
    //     return false;
    // }
}