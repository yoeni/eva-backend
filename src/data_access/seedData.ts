
import encrypor from '../utils/cryptor';

export const usersData = [
    { id: 'cf40d82d-75b3-4d35-9f9d-4780c0831335', username: 'user1', email: 'user1@example.com', password: encrypor.encrypt('password1') },
    { id: '22f8d779-9f47-488c-a7b6-36204e635458', username: 'user2', email: 'user2@example.com', password: encrypor.encrypt('password2') },
    { id: '9ba92f75-c7e7-4409-955a-b5cb94f15938', username: 'user3', email: 'user3@example.com', password: encrypor.encrypt('password3') },
    { id: '70a8f839-3fcb-4641-91b3-68f0934df309', username: 'user4', email: 'user4@example.com', password: encrypor.encrypt('password4') },
    { id: 'bb276ddd-8d83-4295-a577-f13ed92dd7b9', username: 'user5', email: 'user5@example.com', password: encrypor.encrypt('password5') },
];
export const portfoliosData = [
    { id: '15b66c0d-eda2-4d78-8a0f-2f78b6f5ab1e', userId: 'cf40d82d-75b3-4d35-9f9d-4780c0831335'},
    { id: '8e89c57d-2e98-4ab6-8f33-9f6f1c3a5e13', userId: '22f8d779-9f47-488c-a7b6-36204e635458'},
    { id: 'b38e7e69-5b89-4d70-bb43-0f773db3635d', userId: '9ba92f75-c7e7-4409-955a-b5cb94f15938'},
    { id: 'fcc2e7c8-c108-4e84-a22f-3d3b9f245b11', userId: '70a8f839-3fcb-4641-91b3-68f0934df309'},
    { id: '30e57b7f-0f99-48a8-b5b5-1d10c333d01f', userId: 'bb276ddd-8d83-4295-a577-f13ed92dd7b9'},
];
export const portfolioSharesData = [
    { id: '5a5f0573-536f-4a7b-82a0-2f2d72233dc4', portfolioId: '15b66c0d-eda2-4d78-8a0f-2f78b6f5ab1e', shareId: '1fbb6c94-b0b8-40bb-b3a0-9b1f29f53b35', quantity: 10 },
    { id: 'd5e932d3-60f3-4d53-af1c-7e1c9b238d3e', portfolioId: '15b66c0d-eda2-4d78-8a0f-2f78b6f5ab1e', shareId: 'b1d9b324-1366-4ed2-bc02-9d144df87c5e', quantity: 5 },
    { id: 'e4f24a4b-6c28-4095-9f6a-3e7cc8c297c4', portfolioId: '8e89c57d-2e98-4ab6-8f33-9f6f1c3a5e13', shareId: 'b1d9b324-1366-4ed2-bc02-9d144df87c5e', quantity: 8 },
    { id: '32e9b44d-9e69-47a8-9e26-71b96b570e5f', portfolioId: 'b38e7e69-5b89-4d70-bb43-0f773db3635d', shareId: 'b1d9b324-1366-4ed2-bc02-9d144df87c5e', quantity: 15 },
    { id: 'c530b0d0-5788-46b3-8cf6-4e8900d52a50', portfolioId: 'fcc2e7c8-c108-4e84-a22f-3d3b9f245b11', shareId: '1fbb6c94-b0b8-40bb-b3a0-9b1f29f53b35', quantity: 20 },
];
export const tradesData = [
    { id: 'f3a6f447-4a9d-47e4-96ad-8ef13e9c3c09', portfolioId: '15b66c0d-eda2-4d78-8a0f-2f78b6f5ab1e', shareId: '1fbb6c94-b0b8-40bb-b3a0-9b1f29f53b35', tradeType: 1, quantity: 10, tradePrice: 150, tradeTime: new Date() },
    { id: '52e682a0-458d-4321-8564-119ab280b722', portfolioId: '8e89c57d-2e98-4ab6-8f33-9f6f1c3a5e13', shareId: 'b1d9b324-1366-4ed2-bc02-9d144df87c5e', tradeType: 0, quantity: 5, tradePrice: 2500, tradeTime: new Date() },
    { id: '6ef12809-6a0a-446e-b11d-4ef823c21b3e', portfolioId: 'b38e7e69-5b89-4d70-bb43-0f773db3635d', shareId: 'b1d9b324-1366-4ed2-bc02-9d144df87c5e', tradeType: 1, quantity: 8, tradePrice: 300, tradeTime: new Date() },
    { id: '264c57c5-43e8-4d2d-9e1e-35e4d6a0ecf5', portfolioId: 'fcc2e7c8-c108-4e84-a22f-3d3b9f245b11', shareId: '1fbb6c94-b0b8-40bb-b3a0-9b1f29f53b35', tradeType: 0, quantity: 15, tradePrice: 3500, tradeTime: new Date() },
    { id: 'c7314d15-8c11-4a16-9a8b-3c6c79f8f0d3', portfolioId: '30e57b7f-0f99-48a8-b5b5-1d10c333d01f', shareId: 'b1d9b324-1366-4ed2-bc02-9d144df87c5e', tradeType: 1, quantity: 20, tradePrice: 400, tradeTime: new Date() },
];

export const shareData = [
    { id: '1fbb6c94-b0b8-40bb-b3a0-9b1f29f53b35', symbol: "AAA", price: Math.random() * 1000 },
    { id: '0a8e89fa-9b02-4f50-b51e-9ab187a9b4f0', symbol: "AAB", price: Math.random() * 1000 },
    { id: '5a18bf31-654c-4d19-bd82-37f8f8de1a6f', symbol: "AAC", price: Math.random() * 1000 },
    { id: '1d2207c7-6f6b-4865-a74c-84e68f15aa03', symbol: "AAD", price: Math.random() * 1000 },
    { id: '6b37e8f0-3cc6-446c-8e59-204d2a6cde8e', symbol: "AAE", price: Math.random() * 1000 },
    { id: '52c06e64-1a78-46c5-9361-44b90efc48f3', symbol: "AAF", price: Math.random() * 1000 },
    { id: 'fae1cda8-af1d-4f26-b5e2-d6a47be55b4e', symbol: "AAG", price: Math.random() * 1000 },
    { id: '3e3be2db-8ba5-4603-96a7-7f4e6c21e1bf', symbol: "AAH", price: Math.random() * 1000 },
    { id: 'ac2dd30f-cba8-4c33-b38f-dccaa7f4f5f4', symbol: "AAI", price: Math.random() * 1000 },
    { id: '92f4d853-5205-438d-869a-cc90d4b23e68', symbol: "AAJ", price: Math.random() * 1000 },
    { id: '1216d186-60e0-4e3d-88d1-62e59f89b6a5', symbol: "AAK", price: Math.random() * 1000 },
    { id: '725c8c0c-56d5-43c3-ae31-5f1df5b27577', symbol: "AAL", price: Math.random() * 1000 },
    { id: '91f1222b-37ee-4b2c-a1d4-b07841a1726a', symbol: "AAM", price: Math.random() * 1000 },
    { id: '4bca8607-e47b-4768-93bc-1c68f7d1b785', symbol: "AAN", price: Math.random() * 1000 },
    { id: 'fc93f0b6-c5a3-49b5-bd5b-1d8e03049701', symbol: "AAO", price: Math.random() * 1000 },
    { id: '5b7d053e-2344-49cf-85c2-8a41333d5ab5', symbol: "AAP", price: Math.random() * 1000 },
    { id: '5e6f4643-1962-44d7-b6f0-9be21628b293', symbol: "AAQ", price: Math.random() * 1000 },
    { id: '7cc7d186-eb02-4b4d-82f7-198c5e775f16', symbol: "AAR", price: Math.random() * 1000 },
    { id: 'a84779a7-88d8-4f61-8f17-15d331bc7644', symbol: "AAS", price: Math.random() * 1000 },
    { id: '5f6354f6-1788-4ee5-900c-7897d1f8a191', symbol: "AAT", price: Math.random() * 1000 },
    { id: '1982094f-0de8-4d99-9a9d-3b06724f3c14', symbol: "AAU", price: Math.random() * 1000 },
    { id: '8db3bfeb-8446-4f95-ae3c-7c0d5a7991ef', symbol: "AAV", price: Math.random() * 1000 },
    { id: 'de2b8ab4-1d3f-4b84-8321-4b8be50729a5', symbol: "AAW", price: Math.random() * 1000 },
    { id: 'e98b1190-9e1e-44d7-95ec-53a1a03c56f0', symbol: "AAX", price: Math.random() * 1000 },
    { id: '84ef1f4e-50eb-4d1d-aed6-50e4d19fb345', symbol: "AAY", price: Math.random() * 1000 },
    { id: 'e1d6f37d-e5bc-4e1b-8db8-af89eeb9e16f', symbol: "AAZ", price: Math.random() * 1000 },
    { id: '4ce9a5be-2a55-4417-897d-5ab0b8fba7a5', symbol: "ABA", price: Math.random() * 1000 },
    { id: '3727a7f5-3193-4c8f-8b06-58e69ac9371f', symbol: "ABB", price: Math.random() * 1000 },
    { id: '22b19842-56a1-4f59-b60a-4f78db9d1f45', symbol: "ABC", price: Math.random() * 1000 },
    { id: 'f6c6f417-9683-46ee-b166-89e11d0ab0ae', symbol: "ABD", price: Math.random() * 1000 },
    { id: 'b1d9b324-1366-4ed2-bc02-9d144df87c5e', symbol: "ABE", price: Math.random() * 1000 },
    { id: '56342e38-d51f-4785-92a6-151af02b9376', symbol: "ABF", price: Math.random() * 1000 },
    { id: '4f9f593d-7508-4e99-88b2-72561b2b6a92', symbol: "ABG", price: Math.random() * 1000 },
    { id: '7d12c758-12a2-4436-b202-081c67f9ff61', symbol: "ABH", price: Math.random() * 1000 },
    { id: '11e75f7e-1548-4cc5-a8ad-1b32f6c53d55', symbol: "ABI", price: Math.random() * 1000 },
    { id: '0df53c0c-3b47-4a1e-93de-4f2f416fa7b4', symbol: "ABJ", price: Math.random() * 1000 },
    { id: 'b1f435fd-1cc5-4a9e-a8eb-442c26f370f0', symbol: "ABK", price: Math.random() * 1000 },
    { id: '5827d652-cb55-4c9f-a98b-79a0f0f9220d', symbol: "ABL", price: Math.random() * 1000 },
    { id: 'd7ecfe13-83f1-487a-a6cd-9c9308325b9a', symbol: "ABM", price: Math.random() * 1000 },
    { id: '0b4eab02-6d9f-4e0a-aa96-3b2b402de5ac', symbol: "ABN", price: Math.random() * 1000 },
    { id: '7b9ba5cd-05ce-4040-99e0-5144b4b1324d', symbol: "ABO", price: Math.random() * 1000 },
    { id: '7d04b171-79cd-40e3-b758-e6c8c5fdd6ff', symbol: "ABP", price: Math.random() * 1000 },
    { id: '1dd85343-9a0a-4eac-8f84-e76c34bf0ab3', symbol: "ABQ", price: Math.random() * 1000 },
    { id: 'b222c28d-cc54-47a7-a5e5-c2cf5eafdd0c', symbol: "ABR", price: Math.random() * 1000 },
    { id: '50b721f3-365d-4652-8e1a-77a1c60e70b6', symbol: "ABS", price: Math.random() * 1000 },
    { id: '5c7dd412-0cf8-4ddc-a38d-8a07e704df26', symbol: "ABT", price: Math.random() * 1000 },
    { id: 'eb3d78d1-d8b8-4473-9d3f-69ff4d4f8a19', symbol: "ABU", price: Math.random() * 1000 },
    { id: '2ab0c7b3-d6e1-4a4b-a91b-68137823e614', symbol: "ABV", price: Math.random() * 1000 },
    { id: 'e8c17b4a-1c89-40b1-8a9d-44b75b06d3ce', symbol: "ABW", price: Math.random() * 1000 },
    { id: 'aecc1284-72f3-4f94-8355-b0e85a7e5e50', symbol: "ABX", price: Math.random() * 1000 },
    { id: 'aaf9d875-2ec0-40f5-86f6-65599b6d5c26', symbol: "ABY", price: Math.random() * 1000 },
    { id: '6c8026f2-b5d4-4f9b-8722-0993d29a12f7', symbol: "ABZ", price: Math.random() * 1000 }
];
