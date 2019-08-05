
// site generateur json: https://www.json-generator.com/
/*[
  '{{repeat(2, 5)}}',
  {
    _id: '{{objectId()}}',
    status: '{{random("backlog","todo","ongoing","done")}}',
    titre: '{{firstName()}} {{surname()}}',
    sous_taches:[
      	'{{repeat(1, 5)}}',
      {
        _id: '{{objectId()}}',
    	titre: '{{firstName()}} {{surname()}}'
      }

    ]

  }
]
*/
let taches = [
    {
      "_id": "5d48170fd19c26d9c3b05f86",
      "status": "done",
      "titre": "Queen Walker",
      "sous_taches": [
        {
          "_id": "5d48170f6a7d346b3e0af49e",
          "titre": "Adams Kerr"
        },
        {
          "_id": "5d48170f1468006068c73bad",
          "titre": "Rosemary Mayer"
        }
      ]
    },
    {
      "_id": "5d48170f3cee4045b8e5861f",
      "status": "ongoing",
      "titre": "Frederick Rush",
      "sous_taches": [
        {
          "_id": "5d48170fc08253dbe13effd9",
          "titre": "Olivia Mccormick"
        },
        {
          "_id": "5d48170f9a00c7e08db47af9",
          "titre": "Hooper Nieves"
        },
        {
          "_id": "5d48170fbbb768357ed772d7",
          "titre": "Eugenia Mcintyre"
        },
        {
          "_id": "5d48170fa1a0726c394cc2d8",
          "titre": "Maldonado Nelson"
        },
        {
          "_id": "5d48170f56ef151a71e8e69d",
          "titre": "Patton Carey"
        }
      ]
    },
    {
      "_id": "5d48170f8693c8dab788e3e9",
      "status": "ongoing",
      "titre": "Ivy Mcgee",
      "sous_taches": [
        {
          "_id": "5d48170fe1642759af34ceed",
          "titre": "Chris Anderson"
        },
        {
          "_id": "5d48170ff3e1ffc5a6c4d60f",
          "titre": "Mason Ray"
        },
        {
          "_id": "5d48170f63db2594a602b09c",
          "titre": "Mercer Hancock"
        }
      ]
    },
    {
      "_id": "5d48170f482e82e2a9a174c7",
      "status": "ongoing",
      "titre": "Daisy Mckay",
      "sous_taches": [
        {
          "_id": "5d48170feb7439e30a43c24e",
          "titre": "Barber Grant"
        },
        {
          "_id": "5d48170fc61f9a54498a37cc",
          "titre": "Ashlee Hamilton"
        }
      ]
    },
    {
      "_id": "5d48170f0b04ee57f37df148",
      "status": "ongoing",
      "titre": "Pace Burgess",
      "sous_taches": [
        {
          "_id": "5d48170f6bb19003edc54067",
          "titre": "Casey Meyer"
        },
        {
          "_id": "5d48170f3b59175b67e5d311",
          "titre": "Faulkner Henderson"
        }
      ]
    }
  ]