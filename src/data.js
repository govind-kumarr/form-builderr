let data = [
  // { value: "item1", id: "1e736713-f974-4b66-bd03-c948cee5eb81" },
  // { value: "item2", id: "aaa71034-f4df-4c22-8000-f7e2e2296901" },
  // { value: "item3", id: "92c1886f-f1a9-4b52-8279-dd2923844173" },
  // { value: "item4", id: "897ccc07-62fa-4d04-87ca-a3561f82585a" },
  // { value: "item5", id: "2a4c13ed-5a9c-4611-9441-a20eb1f9a54c" },
];

let formData = {
  "ca4a034a-e8a3-4ec9-99e4-8a1df822c910": {
    type: "category",
    category: [
      {
        value: "c1",
        id: "26b473a4-989c-4524-af78-a56b57baf91d",
      },
      {
        value: "c2",
        id: "3f8f07be-7967-4445-ad46-1de91a1c7a3c",
      },
      {
        value: "c3",
        id: "afc54eb6-88cb-400c-b784-ac9d9d7d0d5a",
      },
    ],
    items: [
      {
        value: "item1",
        id: "caec0e8a-5ec2-4585-99e3-99ab5ed24636",
        belongsTo: "26b473a4-989c-4524-af78-a56b57baf91d",
      },
      {
        value: "item2",
        id: "5dcc63d3-ab97-4984-bd56-544903417b7c",
        belongsTo: "3f8f07be-7967-4445-ad46-1de91a1c7a3c",
      },
      {
        value: "item3",
        id: "ea8ee28d-f1c2-493c-ae88-368b34233d40",
        belongsTo: "26b473a4-989c-4524-af78-a56b57baf91d",
      },
    ],
  },
  "50effe0e-e5ab-403a-8a44-3d0a72ee0da8": {
    type: "category",
    category: [
      {
        value: "cc1",
        id: "1fef44f1-aecf-4542-9083-3a84fdec54d0",
      },
      {
        value: "cc2",
        id: "07d1f413-54ae-4c0a-ab0c-4d1fd08ab858",
      },
    ],
    items: [
      {
        value: "ii1",
        id: "fff8a36e-9ac5-4711-8e7a-02f6af66434d",
        belongsTo: "1fef44f1-aecf-4542-9083-3a84fdec54d0",
      },
      {
        value: "ii2",
        id: "b59d2f05-9f60-4401-a523-a126d97971bd",
        belongsTo: "1fef44f1-aecf-4542-9083-3a84fdec54d0",
      },
    ],
  },
};

export { data, formData };
