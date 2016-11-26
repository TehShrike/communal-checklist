
INSERT INTO list (id, editKey, other, version)
VALUES ('0734b635-ccfa-44fb-ae0f-5722b228599a', 'f7239f8c-5378-41d0-bdc9-9e7d35291d3d', '{}', 7);
INSERT INTO category (id, name, description, listId)
VALUES ('9fb10910-bca3-4430-8415-f9ccb1b354bb', 'Default category', '', '0734b635-ccfa-44fb-ae0f-5722b228599a');

INSERT INTO item (id, name, url, categoryId)
VALUES ('2c635788-90fe-4182-8fef-782fe6ba7c9d', 'Item 1', '', '9fb10910-bca3-4430-8415-f9ccb1b354bb');

INSERT INTO item (id, name, url, categoryId)
VALUES ('28d9e2f9-72f3-4add-b6da-b9ccc856fb94', 'Item 2', '', '9fb10910-bca3-4430-8415-f9ccb1b354bb');

INSERT INTO item (id, name, url, categoryId)
VALUES ('ad66730b-eabb-4391-a7b3-233e7f71898c', 'Item 3', '', '9fb10910-bca3-4430-8415-f9ccb1b354bb');

INSERT INTO item (id, name, url, categoryId)
VALUES ('9981dd72-7df9-4172-9113-75ce57d1d17c', 'Item D', '', '9fb10910-bca3-4430-8415-f9ccb1b354bb');

INSERT INTO item (id, name, url, categoryId)
VALUES ('2102f665-c71c-4bf8-ad6e-03d865395ec4', 'Item E', '', '9fb10910-bca3-4430-8415-f9ccb1b354bb');

INSERT INTO item (id, name, url, categoryId)
VALUES ('9120f296-28f3-410d-b683-93e738179952', 'Item F', '', '9fb10910-bca3-4430-8415-f9ccb1b354bb');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('9c356c84-9ab8-4876-8747-216df33c4278', NULL, '2c635788-90fe-4182-8fef-782fe6ba7c9d');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('f77f4703-098a-40c0-88bd-1a50a2aa31ea', NULL, '28d9e2f9-72f3-4add-b6da-b9ccc856fb94');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('e042bc79-054c-4ce8-bd65-946675e0ec77', NULL, 'ad66730b-eabb-4391-a7b3-233e7f71898c');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('1e6f02de-7d2b-45c4-853f-f0f3772858c0', NULL, '9981dd72-7df9-4172-9113-75ce57d1d17c');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('331ff569-4245-4fc2-9104-a57cf96e9ca3', NULL, '2102f665-c71c-4bf8-ad6e-03d865395ec4');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('8888b669-19f2-4768-9238-c9723d647467', NULL, '9120f296-28f3-410d-b683-93e738179952');

INSERT INTO list (id, editKey, other, version)
VALUES ('181ccfa8-a578-4f42-a44e-c7ed69818d1e', '93799465-7d3a-4b8b-8eaa-84986c7e04b9', '{\"name\":\"list\"}', 4);
INSERT INTO category (id, name, description, listId)
VALUES ('874c78be-bc12-4e0d-81f9-a36965aabc72', 'Dummy name', 'junk', '181ccfa8-a578-4f42-a44e-c7ed69818d1e');

INSERT INTO list (id, editKey, other, version)
VALUES ('1b1a3edb-0c0b-42f9-90c0-436695597078', '49968295-fe3c-49f5-a979-08485ee7f922', '{\"name\":\"Who\'s bringing what to Sunday dinner\"}', 15);
INSERT INTO category (id, name, description, listId)
VALUES ('f7e65ae7-0090-4912-b44a-173b755bfbfd', 'Food', '', '1b1a3edb-0c0b-42f9-90c0-436695597078');

INSERT INTO category (id, name, description, listId)
VALUES ('cfb8856c-0b9f-42e2-a7e9-c2197e949164', 'Alcohol', '', '1b1a3edb-0c0b-42f9-90c0-436695597078');

INSERT INTO item (id, name, url, categoryId)
VALUES ('8a74aa83-0300-4584-ae42-d8dbe311ef34', 'Meat', '', 'f7e65ae7-0090-4912-b44a-173b755bfbfd');

INSERT INTO item (id, name, url, categoryId)
VALUES ('9976620e-a75e-44bd-8a60-bbea4718edbf', 'Potatoes', '', 'f7e65ae7-0090-4912-b44a-173b755bfbfd');

INSERT INTO item (id, name, url, categoryId)
VALUES ('52f7e1e1-df44-48cd-a7b7-2be826223889', 'Salad', '', 'f7e65ae7-0090-4912-b44a-173b755bfbfd');

INSERT INTO item (id, name, url, categoryId)
VALUES ('44d08518-acf1-4150-ad70-da36921bb541', 'Dessert', '', 'f7e65ae7-0090-4912-b44a-173b755bfbfd');

INSERT INTO item (id, name, url, categoryId)
VALUES ('b86b59a8-414e-46f5-8c78-4421ffd095bb', 'Wine', '', 'cfb8856c-0b9f-42e2-a7e9-c2197e949164');

INSERT INTO item (id, name, url, categoryId)
VALUES ('699ef611-90bf-4cb8-8c4a-dcdf69335880', 'IPA', '', 'cfb8856c-0b9f-42e2-a7e9-c2197e949164');

INSERT INTO item (id, name, url, categoryId)
VALUES ('2903ba1d-ed64-4206-9a1e-70c2240d612b', 'Stout', '', 'cfb8856c-0b9f-42e2-a7e9-c2197e949164');

INSERT INTO item (id, name, url, categoryId)
VALUES ('8bd7f468-2389-4a8b-8101-5b05c45732d2', 'Lager', '', 'cfb8856c-0b9f-42e2-a7e9-c2197e949164');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('2686cf91-ccf1-4bea-82e0-b733fc50029d', NULL, '8a74aa83-0300-4584-ae42-d8dbe311ef34');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('f38b3e8d-9774-4347-b70b-9caabc44bfd7', NULL, '9976620e-a75e-44bd-8a60-bbea4718edbf');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('cf1c4284-1ac1-448a-aead-35ec94230eea', NULL, '52f7e1e1-df44-48cd-a7b7-2be826223889');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('6429376b-2ac3-4196-8009-4c14616aeea7', NULL, '52f7e1e1-df44-48cd-a7b7-2be826223889');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('eda8fe5d-90b0-4dfc-8557-c9fe2a0e4373', NULL, '44d08518-acf1-4150-ad70-da36921bb541');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('a5f14870-70b4-40ef-a440-accf581afe5e', NULL, '44d08518-acf1-4150-ad70-da36921bb541');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('a36b051c-9ede-4977-b1b2-bf65c6f7100c', NULL, 'b86b59a8-414e-46f5-8c78-4421ffd095bb');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('70df8be1-02de-4ef4-9971-d7c89f1cf6ee', NULL, '699ef611-90bf-4cb8-8c4a-dcdf69335880');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('daf42f31-fa35-4475-9f86-2c79c448e421', NULL, '699ef611-90bf-4cb8-8c4a-dcdf69335880');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('81fe979d-5f1d-4d1f-9dae-efd2b78aac66', NULL, '699ef611-90bf-4cb8-8c4a-dcdf69335880');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('e19405b8-38a6-4704-92f1-72c45b792955', NULL, '2903ba1d-ed64-4206-9a1e-70c2240d612b');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('54a780ca-0cd0-414b-b410-67d832d5da2a', NULL, '8bd7f468-2389-4a8b-8101-5b05c45732d2');

INSERT INTO list (id, editKey, other, version)
VALUES ('2df909b0-a3b3-456d-9943-c2d40f5eeec0', '53f20df2-18bb-47c4-8bf5-1f871afe7b84', '{\"name\":\"Whatevs\"}', 1);
INSERT INTO category (id, name, description, listId)
VALUES ('b806ff70-4b5f-4e41-a01f-b1f2f8822cdc', 'Default category', '', '2df909b0-a3b3-456d-9943-c2d40f5eeec0');

INSERT INTO list (id, editKey, other, version)
VALUES ('40d9c1df-a870-44d2-a7a3-067f37f23563', 'c754babc-0ea9-4684-88e6-ccc35b4f9ed2', '{\"name\":\"Wat\"}', 2);
INSERT INTO category (id, name, description, listId)
VALUES ('fa4d76d9-f8fc-4e4b-bd8a-d4983f3eaf6f', 'Default category', '', '40d9c1df-a870-44d2-a7a3-067f37f23563');

INSERT INTO list (id, editKey, other, version)
VALUES ('5506bb6d-6d28-4a4f-bc54-0c0f74e70401', '4b4e8041-698e-4402-8563-741ad40487b9', '{}', 1);
INSERT INTO category (id, name, description, listId)
VALUES ('648b7e25-cf55-4b9b-a785-a2386396d671', 'Default category', '', '5506bb6d-6d28-4a4f-bc54-0c0f74e70401');

INSERT INTO category (id, name, description, listId)
VALUES ('d487ee71-321c-47fa-a2a7-95bcf7c5fb48', 'Beer', '', '5506bb6d-6d28-4a4f-bc54-0c0f74e70401');

INSERT INTO list (id, editKey, other, version)
VALUES ('765c862b-f93e-494c-8945-c9a8b6f7cb1f', '17b4e06e-3093-4515-aa52-272b2b4cdcd9', '{}', 10);
INSERT INTO category (id, name, description, listId)
VALUES ('a0762723-b336-4214-a34f-651e99fef333', 'Default category', 'What is even going on over here?!', '765c862b-f93e-494c-8945-c9a8b6f7cb1f');

INSERT INTO list (id, editKey, other, version)
VALUES ('76c203ac-2e13-4768-add8-65d24ad8b650', '0ddd3bc7-29c0-43fe-9384-5a5a29fc14fb', '{}', 0);
INSERT INTO category (id, name, description, listId)
VALUES ('2bfce962-08b3-4a50-a686-ca2f6868e4f2', 'Dummy name', '', '76c203ac-2e13-4768-add8-65d24ad8b650');

INSERT INTO list (id, editKey, other, version)
VALUES ('7b9ce1fa-0000-4750-87a4-fcdef491a727', '8a05e102-b81e-40d6-a80f-c775a162d1d9', '{\"name\":\"huh\"}', 11);
INSERT INTO category (id, name, description, listId)
VALUES ('b4ecc769-9517-49b0-b4e4-17f4aa7ac8d5', 'Dummy name', '', '7b9ce1fa-0000-4750-87a4-fcdef491a727');

INSERT INTO item (id, name, url, categoryId)
VALUES ('1490fa2e-9368-46ce-a2f7-145d83dca714', 'lol', 'amazon.com', 'b4ecc769-9517-49b0-b4e4-17f4aa7ac8d5');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('d308413c-4209-4251-9448-ebfb9b577590', NULL, '1490fa2e-9368-46ce-a2f7-145d83dca714');

INSERT INTO list (id, editKey, other, version)
VALUES ('88606655-95ba-4b58-9fd0-e86f42d4b04e', '6d7154bf-1034-47ef-b300-37bb1c685506', '{\"name\":\"The new list I just made now\"}', 6);
INSERT INTO category (id, name, description, listId)
VALUES ('fe15941f-2737-4103-9b05-2ed574eb5f79', 'Some category', 'This is the category with all the stuff', '88606655-95ba-4b58-9fd0-e86f42d4b04e');

INSERT INTO item (id, name, url, categoryId)
VALUES ('a9558c52-2993-45a5-9582-ea3c4da8e264', 'Thing 1', '', 'fe15941f-2737-4103-9b05-2ed574eb5f79');

INSERT INTO item (id, name, url, categoryId)
VALUES ('644adf5d-87a6-4741-b60b-bb43f9bc93dd', 'Thing 2', '', 'fe15941f-2737-4103-9b05-2ed574eb5f79');

INSERT INTO item (id, name, url, categoryId)
VALUES ('b37645dc-d827-438d-8076-abb6ca12ce7a', 'Cat', '', 'fe15941f-2737-4103-9b05-2ed574eb5f79');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('52f47f1d-0f90-4394-9db9-4442882902d8', NULL, 'a9558c52-2993-45a5-9582-ea3c4da8e264');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('6ae896e8-c4ad-40b4-b801-ae011dd1bca4', NULL, '644adf5d-87a6-4741-b60b-bb43f9bc93dd');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('2d4ac3dc-610b-48b9-9276-c60226bae254', NULL, 'b37645dc-d827-438d-8076-abb6ca12ce7a');

INSERT INTO list (id, editKey, other, version)
VALUES ('8d089f48-180a-41a9-859b-34841802b9fa', '64477e85-43aa-4ca3-b35c-56738e876024', '{\"name\":\"wat\"}', 13);
INSERT INTO category (id, name, description, listId)
VALUES ('511ec849-93ec-4805-9115-fc76c49ab8cc', 'wat', 'hurr', '8d089f48-180a-41a9-859b-34841802b9fa');

INSERT INTO item (id, name, url, categoryId)
VALUES ('b30b820b-b381-4f49-8186-499bd3865c2f', '', '', '511ec849-93ec-4805-9115-fc76c49ab8cc');

INSERT INTO item (id, name, url, categoryId)
VALUES ('9a8737c9-f86c-40cf-abf3-6339fbdd2576', 'wat', '', '511ec849-93ec-4805-9115-fc76c49ab8cc');

INSERT INTO item (id, name, url, categoryId)
VALUES ('bd22f10c-d172-491a-8a00-9257b6d70864', 'hurr', '', '511ec849-93ec-4805-9115-fc76c49ab8cc');

INSERT INTO item (id, name, url, categoryId)
VALUES ('243bc0dd-75c0-4128-bbd2-44ccda42bd72', 'uh', '', '511ec849-93ec-4805-9115-fc76c49ab8cc');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('8817248e-49c1-4507-9954-a46672f54743', NULL, 'b30b820b-b381-4f49-8186-499bd3865c2f');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('340da601-5212-454a-b809-a25a1015b65e', NULL, '9a8737c9-f86c-40cf-abf3-6339fbdd2576');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('201b9e7b-0aba-4fc2-bb3d-546eae9d4f5e', NULL, 'bd22f10c-d172-491a-8a00-9257b6d70864');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('32c1b268-8073-4068-b878-9a7fb261a511', NULL, '243bc0dd-75c0-4128-bbd2-44ccda42bd72');

INSERT INTO list (id, editKey, other, version)
VALUES ('8d52f056-2132-4867-8c65-072c6681c1d3', '26064c56-8e4a-47a7-b78e-615df714dd6f', '{\"name\":\"Who\'s bringing food to Sunday lunch\"}', 12);
INSERT INTO category (id, name, description, listId)
VALUES ('e0a69b94-32c8-42d9-bdcb-bd8acdcc68af', 'Sandwiches', 'mmmm sandwiches', '8d52f056-2132-4867-8c65-072c6681c1d3');

INSERT INTO category (id, name, description, listId)
VALUES ('d67ba5ad-9f29-451f-9b0e-2cd364912cdc', 'Beer', '', '8d52f056-2132-4867-8c65-072c6681c1d3');

INSERT INTO item (id, name, url, categoryId)
VALUES ('cac4f123-54d5-49cc-a081-7952a17393c5', 'Beef', '', 'e0a69b94-32c8-42d9-bdcb-bd8acdcc68af');

INSERT INTO item (id, name, url, categoryId)
VALUES ('7f6952d8-e400-49c5-a600-a145b1bfedfe', 'Chicken', '', 'e0a69b94-32c8-42d9-bdcb-bd8acdcc68af');

INSERT INTO item (id, name, url, categoryId)
VALUES ('40539201-88e6-4807-a85c-9216c9ef1a18', 'Cheddar', '', 'e0a69b94-32c8-42d9-bdcb-bd8acdcc68af');

INSERT INTO item (id, name, url, categoryId)
VALUES ('98f4fab1-bcf9-454b-9493-daaa6f5a70d3', 'IPA', '', 'd67ba5ad-9f29-451f-9b0e-2cd364912cdc');

INSERT INTO item (id, name, url, categoryId)
VALUES ('7b8b6959-5404-410e-affb-41478f28961d', 'Lager', '', 'd67ba5ad-9f29-451f-9b0e-2cd364912cdc');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('b19123c0-8031-4d64-9459-d990181bee19', NULL, 'cac4f123-54d5-49cc-a081-7952a17393c5');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('fc2ed7e1-0f5b-4198-9d76-ab22b137a99c', NULL, '7f6952d8-e400-49c5-a600-a145b1bfedfe');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('9cd17f74-271e-4e32-9a5c-04d09df193d7', NULL, '40539201-88e6-4807-a85c-9216c9ef1a18');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('3a879d98-adfc-4222-a10c-1b2421e0f4d8', NULL, '98f4fab1-bcf9-454b-9493-daaa6f5a70d3');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('1fb50e5a-7ac0-498d-8e85-30cb9310a50f', NULL, '98f4fab1-bcf9-454b-9493-daaa6f5a70d3');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('70802b8d-860d-4b94-af3f-b45a9b116cd7', NULL, '98f4fab1-bcf9-454b-9493-daaa6f5a70d3');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('a0d2f0f8-e460-4614-b4f3-243820facc43', NULL, '98f4fab1-bcf9-454b-9493-daaa6f5a70d3');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('a4f0a957-4741-4032-9c63-0cb714365bee', NULL, '7b8b6959-5404-410e-affb-41478f28961d');

INSERT INTO list (id, editKey, other, version)
VALUES ('9852aef9-821d-4176-a0b7-89e9ac1ef625', '394e7834-f5ae-4f23-8bbe-a8d689386e9e', '{\"name\":\"Me\"}', 18);
INSERT INTO category (id, name, description, listId)
VALUES ('ecab00b1-64d5-472e-80ce-faa2746651bd', 'Wat', 'Check it out, yo!', '9852aef9-821d-4176-a0b7-89e9ac1ef625');

INSERT INTO item (id, name, url, categoryId)
VALUES ('601637d1-791a-4e37-b82f-07eb53b21d9b', 'Thing 1', '', 'ecab00b1-64d5-472e-80ce-faa2746651bd');

INSERT INTO item (id, name, url, categoryId)
VALUES ('08ec9883-c055-4e1b-929d-c024cb295f90', 'Thing 2', '', 'ecab00b1-64d5-472e-80ce-faa2746651bd');

INSERT INTO item (id, name, url, categoryId)
VALUES ('516d9cb5-84fe-4a0a-b51b-f17512c3acd0', 'Hat', '', 'ecab00b1-64d5-472e-80ce-faa2746651bd');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('9303907f-42bb-402d-abfe-85b60adee1cb', NULL, '601637d1-791a-4e37-b82f-07eb53b21d9b');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('916f3f4d-57b3-40bb-90f0-f402982a04a3', NULL, '08ec9883-c055-4e1b-929d-c024cb295f90');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('0f93abad-66ee-46af-b33a-bcfdba3655db', NULL, '516d9cb5-84fe-4a0a-b51b-f17512c3acd0');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('a62e7dfb-514f-4299-a2c8-bf20813152cb', 'Josh', '516d9cb5-84fe-4a0a-b51b-f17512c3acd0');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('9bc8794c-b456-47a9-aa77-c2342bb0f8cc', NULL, '516d9cb5-84fe-4a0a-b51b-f17512c3acd0');

INSERT INTO list (id, editKey, other, version)
VALUES ('aeb895ca-9924-479c-a1a4-b69e6800ad64', 'bbfd80a7-f059-4c8c-a25c-9a62bd58c84f', '{}', 6);
INSERT INTO category (id, name, description, listId)
VALUES ('c3922c91-198a-4f2a-8b88-5a45c3d287a1', 'Dummy name', '', 'aeb895ca-9924-479c-a1a4-b69e6800ad64');

INSERT INTO item (id, name, url, categoryId)
VALUES ('ca39bfa1-f269-407c-a70d-8d773853e162', 'wat', '', 'c3922c91-198a-4f2a-8b88-5a45c3d287a1');

INSERT INTO item (id, name, url, categoryId)
VALUES ('ac714fe3-62cb-4e4f-b43d-e43330e7415e', 'is', '', 'c3922c91-198a-4f2a-8b88-5a45c3d287a1');

INSERT INTO item (id, name, url, categoryId)
VALUES ('18df8eb4-5bb9-4838-a784-b291ba5650bf', 'up', '', 'c3922c91-198a-4f2a-8b88-5a45c3d287a1');

INSERT INTO item (id, name, url, categoryId)
VALUES ('3f19afa8-6c66-4a2f-9fa7-783fea9d2f4a', 'and', '', 'c3922c91-198a-4f2a-8b88-5a45c3d287a1');

INSERT INTO item (id, name, url, categoryId)
VALUES ('e2c660f4-40f6-4503-bf7b-9c8c96cb8ea9', 'stuff', '', 'c3922c91-198a-4f2a-8b88-5a45c3d287a1');

INSERT INTO item (id, name, url, categoryId)
VALUES ('a3e4542b-d6c7-4ec3-bf2d-c3e1dce752cc', 'ugh', '', 'c3922c91-198a-4f2a-8b88-5a45c3d287a1');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('da29ceeb-dcfc-4463-957b-e2e7b7345259', NULL, 'ca39bfa1-f269-407c-a70d-8d773853e162');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('30cf45af-0c91-470d-8f58-33d322f971ca', NULL, 'ac714fe3-62cb-4e4f-b43d-e43330e7415e');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('c58b4c64-5111-461f-927b-73eb7eb825b0', NULL, '18df8eb4-5bb9-4838-a784-b291ba5650bf');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('a74f3b7f-b655-40b9-acbd-1d9d734ebe7e', NULL, '3f19afa8-6c66-4a2f-9fa7-783fea9d2f4a');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('244045aa-e8a9-4f4f-b3ec-dabba9f1c7ee', NULL, 'e2c660f4-40f6-4503-bf7b-9c8c96cb8ea9');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('864311e9-1fa1-4f2d-9b11-8964968ebe90', NULL, 'a3e4542b-d6c7-4ec3-bf2d-c3e1dce752cc');

INSERT INTO list (id, editKey, other, version)
VALUES ('b65b7585-7647-43d7-ad83-9953e5546ce6', 'ea830943-c9ce-43da-af71-7bbd45174106', '{\"name\":\"Who\'s bringing what to Sunday dinner\"}', 14);
INSERT INTO category (id, name, description, listId)
VALUES ('babbbd33-b15c-40f0-b042-4229bb451286', 'Food', '', 'b65b7585-7647-43d7-ad83-9953e5546ce6');

INSERT INTO category (id, name, description, listId)
VALUES ('3c5a43bc-c518-4e70-9d8e-0b80d47596d3', 'Beer', '', 'b65b7585-7647-43d7-ad83-9953e5546ce6');

INSERT INTO item (id, name, url, categoryId)
VALUES ('ac838bc3-90f2-428d-9f5e-d4592b8a6bc8', 'Meat', '', 'babbbd33-b15c-40f0-b042-4229bb451286');

INSERT INTO item (id, name, url, categoryId)
VALUES ('6d6ff271-1c2c-4043-b4e1-36432190cab5', 'Potatoes', '', 'babbbd33-b15c-40f0-b042-4229bb451286');

INSERT INTO item (id, name, url, categoryId)
VALUES ('4070fd46-536d-43c6-91ad-a89edaa1907c', 'Salad', '', 'babbbd33-b15c-40f0-b042-4229bb451286');

INSERT INTO item (id, name, url, categoryId)
VALUES ('4ffc0337-d20c-4e07-8269-0dfc9f26b0ad', 'Dessert', '', 'babbbd33-b15c-40f0-b042-4229bb451286');

INSERT INTO item (id, name, url, categoryId)
VALUES ('7a178ee6-1e9b-4fa9-b546-7ab80d2a63f5', 'IPA', '', '3c5a43bc-c518-4e70-9d8e-0b80d47596d3');

INSERT INTO item (id, name, url, categoryId)
VALUES ('6af38934-e3c7-41ed-8523-e5ffe431800a', 'Lager', '', '3c5a43bc-c518-4e70-9d8e-0b80d47596d3');

INSERT INTO item (id, name, url, categoryId)
VALUES ('5ba290bb-0d01-4abf-b4a9-0fe7a2243563', 'Stout', '', '3c5a43bc-c518-4e70-9d8e-0b80d47596d3');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('2cf6abce-b877-4f64-b699-7d083b690d93', NULL, 'ac838bc3-90f2-428d-9f5e-d4592b8a6bc8');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('89a193a4-d6f4-460c-adc7-fa7014be302d', NULL, '6d6ff271-1c2c-4043-b4e1-36432190cab5');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('94223428-9e79-4789-aef3-f644c3c83b30', NULL, '4070fd46-536d-43c6-91ad-a89edaa1907c');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('ab7cd5ee-fc03-4b9c-bad7-67d625ef12c7', NULL, '4070fd46-536d-43c6-91ad-a89edaa1907c');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('e4c05428-0a54-4e5a-bc86-bc6863129634', NULL, '4ffc0337-d20c-4e07-8269-0dfc9f26b0ad');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('3814c974-f9b7-4e1f-8473-144d4bf85faf', NULL, '4ffc0337-d20c-4e07-8269-0dfc9f26b0ad');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('939d16f3-c700-44d6-9753-8fc3d3cd2592', NULL, '7a178ee6-1e9b-4fa9-b546-7ab80d2a63f5');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('81e129ad-f557-48e9-b969-05184829409e', NULL, '7a178ee6-1e9b-4fa9-b546-7ab80d2a63f5');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('6da5150a-88ee-4c09-b52c-99bc2d39c206', NULL, '7a178ee6-1e9b-4fa9-b546-7ab80d2a63f5');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('2425eee0-a139-4293-86b8-be8ff1f5a850', NULL, '6af38934-e3c7-41ed-8523-e5ffe431800a');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('16089fad-363f-4c88-8e12-33bccfaacc3e', NULL, '5ba290bb-0d01-4abf-b4a9-0fe7a2243563');

INSERT INTO list (id, editKey, other, version)
VALUES ('be9449bd-ddf7-4c37-bc18-1c155e66875a', '1f09c138-aa33-4c8c-bbbf-16673b5dc212', '{\"name\":\"Something\"}', 3);
INSERT INTO category (id, name, description, listId)
VALUES ('ced67171-bb93-4e86-b80d-ff7700c83b75', 'Default category', '', 'be9449bd-ddf7-4c37-bc18-1c155e66875a');

INSERT INTO item (id, name, url, categoryId)
VALUES ('16c3d4e5-5f5c-4979-9106-2941668edc6a', 'Doing', '', 'ced67171-bb93-4e86-b80d-ff7700c83b75');

INSERT INTO item (id, name, url, categoryId)
VALUES ('020d1e76-1141-4b38-a404-df25f4d762af', 'Stuff', '', 'ced67171-bb93-4e86-b80d-ff7700c83b75');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('fe728140-847d-401f-902c-6cc86bf6d4e8', NULL, '16c3d4e5-5f5c-4979-9106-2941668edc6a');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('d66594d3-4226-41e8-8515-5d584b73f4e0', NULL, '020d1e76-1141-4b38-a404-df25f4d762af');

INSERT INTO list (id, editKey, other, version)
VALUES ('bfc867fc-6497-4f4d-a3e5-306172abf093', '665ad3c6-9331-424d-830b-91911437c1dd', '{\"name\":\"Who\'s bringing food to Sunday lunch\"}', 6);
INSERT INTO category (id, name, description, listId)
VALUES ('630e507f-a5bc-426e-9930-c947e636b468', 'Dishes', '', 'bfc867fc-6497-4f4d-a3e5-306172abf093');

INSERT INTO item (id, name, url, categoryId)
VALUES ('e677cbfd-7c7e-473d-abfd-936efdc39718', 'Meat', '', '630e507f-a5bc-426e-9930-c947e636b468');

INSERT INTO item (id, name, url, categoryId)
VALUES ('c7aa1483-efa1-4cfb-9de5-4aab6197b3dd', 'Potatos', '', '630e507f-a5bc-426e-9930-c947e636b468');

INSERT INTO item (id, name, url, categoryId)
VALUES ('918d4116-eda3-4a92-9289-917ed4ff1487', 'Salad', '', '630e507f-a5bc-426e-9930-c947e636b468');

INSERT INTO item (id, name, url, categoryId)
VALUES ('4fb24923-c65b-4375-93f0-6864925c2b2c', 'Dessert', '', '630e507f-a5bc-426e-9930-c947e636b468');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('4be11d7b-4f7a-49ba-a21e-5e3591e5efe2', NULL, 'e677cbfd-7c7e-473d-abfd-936efdc39718');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('a0f72a39-a063-4ac4-b08c-efed8b9a7bfd', NULL, 'c7aa1483-efa1-4cfb-9de5-4aab6197b3dd');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('d3412798-2dad-4a68-86b2-8056beaeadd7', NULL, '918d4116-eda3-4a92-9289-917ed4ff1487');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('4085b0b0-4de0-48a6-9bed-50f3790c1396', NULL, '4fb24923-c65b-4375-93f0-6864925c2b2c');

INSERT INTO list (id, editKey, other, version)
VALUES ('d023aa0d-3717-45d5-bfee-11a13f4dd665', 'ce718f37-5480-4a01-bcd9-521eacce144d', '{\"name\":\"New list\"}', 7);
INSERT INTO category (id, name, description, listId)
VALUES ('c6c28e83-6f15-4500-9913-46bf6f2c4d16', 'Whatever', 'Stuff\n\njunk and other things that are going on or whatever so do stuff and junk, or maybe don\'t I don\'t really care\n\nwhatever and stuff, and that\'s it.\n\n\n', 'd023aa0d-3717-45d5-bfee-11a13f4dd665');

INSERT INTO list (id, editKey, other, version)
VALUES ('d6f11678-aab1-42a1-ac78-f8e708a65bf4', 'dfc0bc15-2b3d-41f5-b77d-2b08b58af8e4', '{\"name\":\"Whatever\"}', 63);
INSERT INTO category (id, name, description, listId)
VALUES ('baa5b022-469a-487c-aed4-2b47c156f934', 'some change', 'Tell me more\n\nTell me all about it\n\nTell me about the newlines', 'd6f11678-aab1-42a1-ac78-f8e708a65bf4');

INSERT INTO category (id, name, description, listId)
VALUES ('6566711f-ca1a-4477-a16c-3898fb5d676c', 'Whatever new category', '', 'd6f11678-aab1-42a1-ac78-f8e708a65bf4');

INSERT INTO category (id, name, description, listId)
VALUES ('b31287e3-ce24-45a9-81e5-e9d851ce77fa', 'Another category', '', 'd6f11678-aab1-42a1-ac78-f8e708a65bf4');

INSERT INTO category (id, name, description, listId)
VALUES ('49beb729-7e4a-47d2-b181-46cc1b35e6c3', 'another', '', 'd6f11678-aab1-42a1-ac78-f8e708a65bf4');

INSERT INTO category (id, name, description, listId)
VALUES ('9073c553-1e21-428b-a8e6-a3b7f90f3883', 'huh', '', 'd6f11678-aab1-42a1-ac78-f8e708a65bf4');

INSERT INTO category (id, name, description, listId)
VALUES ('d5272770-4bb0-47de-8af7-3a0b333bbe27', 'Moar', '', 'd6f11678-aab1-42a1-ac78-f8e708a65bf4');

INSERT INTO category (id, name, description, listId)
VALUES ('c2cff804-715e-4407-b359-206d9fa3b1eb', 'heh', '', 'd6f11678-aab1-42a1-ac78-f8e708a65bf4');

INSERT INTO category (id, name, description, listId)
VALUES ('fa8aa80b-9ec6-4556-b433-69d02f051d0c', 'lol', '', 'd6f11678-aab1-42a1-ac78-f8e708a65bf4');

INSERT INTO category (id, name, description, listId)
VALUES ('e6722dfe-9581-4212-85a0-dd675000306d', 'urr', '', 'd6f11678-aab1-42a1-ac78-f8e708a65bf4');

INSERT INTO category (id, name, description, listId)
VALUES ('2b9a7d9e-d48c-41cd-a868-8fc711e0b961', 'another item', '', 'd6f11678-aab1-42a1-ac78-f8e708a65bf4');

INSERT INTO item (id, name, url, categoryId)
VALUES ('1cd0d4b5-0c9f-4150-a1ac-2610b3f6ff02', 'CATEGORY?', 'http://wrong.com/', 'baa5b022-469a-487c-aed4-2b47c156f934');

INSERT INTO item (id, name, url, categoryId)
VALUES ('86b7d38d-4b46-4422-b238-12a598974d1f', 'wat\'s up doc?', 'http://amazon.com/whatever', 'baa5b022-469a-487c-aed4-2b47c156f934');

INSERT INTO item (id, name, url, categoryId)
VALUES ('be16a116-efb1-4981-8f46-cdfe827ea5b4', 'lolz', 'http://google.com', 'baa5b022-469a-487c-aed4-2b47c156f934');

INSERT INTO item (id, name, url, categoryId)
VALUES ('f141347b-f231-48cc-9c37-9fd788e99fa0', 'hah', '', 'baa5b022-469a-487c-aed4-2b47c156f934');

INSERT INTO item (id, name, url, categoryId)
VALUES ('b26e0130-5c51-4cc6-a0ad-fc23f5502386', 'Some item', '', '6566711f-ca1a-4477-a16c-3898fb5d676c');

INSERT INTO item (id, name, url, categoryId)
VALUES ('bcfb84c7-a50a-46c4-b0c0-da94ccacffb3', 'Not empty', '', 'b31287e3-ce24-45a9-81e5-e9d851ce77fa');

INSERT INTO item (id, name, url, categoryId)
VALUES ('177b8070-6c73-446f-a887-817678ffa6c5', 'Also not empty', '', '49beb729-7e4a-47d2-b181-46cc1b35e6c3');

INSERT INTO item (id, name, url, categoryId)
VALUES ('e0873c92-4c0d-4c0e-8cc7-e3f05064e8ee', 'Still not empty', '', '9073c553-1e21-428b-a8e6-a3b7f90f3883');

INSERT INTO item (id, name, url, categoryId)
VALUES ('e1e924cd-5c3d-406d-8b99-5210f75f24f7', 'Moar not empty', '', 'd5272770-4bb0-47de-8af7-3a0b333bbe27');

INSERT INTO item (id, name, url, categoryId)
VALUES ('07cc0e7c-b94a-4d75-b589-a487c5965e25', 'huh', '', 'c2cff804-715e-4407-b359-206d9fa3b1eb');

INSERT INTO item (id, name, url, categoryId)
VALUES ('7ec93f16-0ff3-46ca-b3ea-d85230c86bee', 'lulz', '', 'fa8aa80b-9ec6-4556-b433-69d02f051d0c');

INSERT INTO item (id, name, url, categoryId)
VALUES ('321f7aa3-d8e4-4ca0-a366-516079bbb783', 'huh', '', 'e6722dfe-9581-4212-85a0-dd675000306d');

INSERT INTO item (id, name, url, categoryId)
VALUES ('d1493dc0-baaf-4253-8cf6-72d6259df28a', 'oh well then', '', 'e6722dfe-9581-4212-85a0-dd675000306d');

INSERT INTO item (id, name, url, categoryId)
VALUES ('084b559e-d302-49a0-8791-faf996d0e89e', 'to test with', '', '2b9a7d9e-d48c-41cd-a868-8fc711e0b961');

INSERT INTO item (id, name, url, categoryId)
VALUES ('7957a7b0-ead5-44d4-8690-6646484269d2', 'and do stuff', '', '2b9a7d9e-d48c-41cd-a868-8fc711e0b961');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('3054da28-0955-4775-9484-a68b36ed1cd0', NULL, '1cd0d4b5-0c9f-4150-a1ac-2610b3f6ff02');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('a8336c97-4232-4182-a01b-a00adb3c66e8', NULL, '86b7d38d-4b46-4422-b238-12a598974d1f');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('77b4f05a-355d-4b1c-a132-1f55ee60ed1d', NULL, 'be16a116-efb1-4981-8f46-cdfe827ea5b4');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('1f5b8257-5132-4a9e-8840-7c43dedf8943', NULL, 'f141347b-f231-48cc-9c37-9fd788e99fa0');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('6161fc3b-b0a4-4b40-8129-1ebfad5cd585', NULL, 'b26e0130-5c51-4cc6-a0ad-fc23f5502386');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('06336370-214b-45bd-820f-2140061be8ae', NULL, 'bcfb84c7-a50a-46c4-b0c0-da94ccacffb3');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('1b89c167-c56b-4531-a5b4-233e535f36fa', NULL, '177b8070-6c73-446f-a887-817678ffa6c5');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('bfda169f-66a3-4c2c-85f4-d6991c414168', NULL, 'e0873c92-4c0d-4c0e-8cc7-e3f05064e8ee');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('4ebe5c0b-0f53-4a28-bbcb-708db4bde2d1', NULL, 'e1e924cd-5c3d-406d-8b99-5210f75f24f7');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('c4884d8b-262f-44c4-8985-25a2cd179bbd', NULL, '07cc0e7c-b94a-4d75-b589-a487c5965e25');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('39c89337-e055-466d-9e20-b13eb1ae258b', NULL, '7ec93f16-0ff3-46ca-b3ea-d85230c86bee');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('5bce6681-baf6-4259-b37e-248d73797cd5', NULL, '321f7aa3-d8e4-4ca0-a366-516079bbb783');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('4e6beaf1-5b56-4dbf-b0b8-0522572e91a3', NULL, 'd1493dc0-baaf-4253-8cf6-72d6259df28a');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('f0acae80-9ce3-478b-8ec9-4c3855127d3c', NULL, '084b559e-d302-49a0-8791-faf996d0e89e');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('e6e6546e-c020-42af-b75d-4d8f750eb358', NULL, '7957a7b0-ead5-44d4-8690-6646484269d2');

INSERT INTO list (id, editKey, other, version)
VALUES ('db0b8271-185f-4159-b0e2-1032b41c68ad', '1c05ea9f-8514-4852-910f-8d02ccb4bd39', '{}', 0);
INSERT INTO category (id, name, description, listId)
VALUES ('a62ddefb-1dc9-41b5-b81f-3dac009b2efe', 'Dummy name', '', 'db0b8271-185f-4159-b0e2-1032b41c68ad');

INSERT INTO list (id, editKey, other, version)
VALUES ('e5deaab8-150e-43e6-9c20-d9993b0a5f41', 'd9058416-b901-42ab-854d-13baf2483982', '{\"name\":\"wat\"}', 36);
INSERT INTO category (id, name, description, listId)
VALUES ('d18df48c-a1ad-4a7d-b702-cc26b4554919', 'wut', 'oh yeah boiee', 'e5deaab8-150e-43e6-9c20-d9993b0a5f41');

INSERT INTO category (id, name, description, listId)
VALUES ('55a8cc9a-425e-44a7-997b-125e001b2f16', 'eh?', 'aw yeah', 'e5deaab8-150e-43e6-9c20-d9993b0a5f41');

INSERT INTO item (id, name, url, categoryId)
VALUES ('c22119ac-2594-423c-bc7d-0108e99e2a34', 'pants', '', 'd18df48c-a1ad-4a7d-b702-cc26b4554919');

INSERT INTO item (id, name, url, categoryId)
VALUES ('c60fb2fa-ace6-4d3a-82b1-182ba7c661e3', 'whatever', '', 'd18df48c-a1ad-4a7d-b702-cc26b4554919');

INSERT INTO item (id, name, url, categoryId)
VALUES ('8a604b93-3e2b-4a83-99fb-f1597d529e5b', 'stuff', '', '55a8cc9a-425e-44a7-997b-125e001b2f16');

INSERT INTO item (id, name, url, categoryId)
VALUES ('7bacd2a1-11a3-4e96-bdba-d5adce9f8906', 'junk', '', '55a8cc9a-425e-44a7-997b-125e001b2f16');

INSERT INTO item (id, name, url, categoryId)
VALUES ('5db7206b-a467-44e9-bc45-d85d26b3d486', 'what is going on here', '', '55a8cc9a-425e-44a7-997b-125e001b2f16');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('9cd72993-4e53-40f4-aabd-da4e42a8efcc', 'Anonymous', 'c22119ac-2594-423c-bc7d-0108e99e2a34');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('d616bb31-103c-465d-be7d-9a1775dfc21f', 'Someone', 'c22119ac-2594-423c-bc7d-0108e99e2a34');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('98db98a4-7c46-4f0e-a0a9-eb7e5ec9debc', 'Anonymous', 'c22119ac-2594-423c-bc7d-0108e99e2a34');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('f0bcd42c-3493-4878-b121-2ae9e32bc92a', NULL, 'c22119ac-2594-423c-bc7d-0108e99e2a34');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('66de07da-11b3-425b-a495-69e43241b9c7', NULL, 'c22119ac-2594-423c-bc7d-0108e99e2a34');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('54c17719-f37b-4424-993e-b8663cbd67ae', 'Someone', 'c60fb2fa-ace6-4d3a-82b1-182ba7c661e3');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('5ae8db74-c91c-4f62-bf95-85b89832a37b', 'Anonymous', 'c60fb2fa-ace6-4d3a-82b1-182ba7c661e3');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('3a6f6785-500a-44a1-b88a-bbfb304d3348', 'Anonymous', '8a604b93-3e2b-4a83-99fb-f1597d529e5b');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('80648832-92ac-45ed-9e68-4a06aa682efd', 'Me', '8a604b93-3e2b-4a83-99fb-f1597d529e5b');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('315ef679-8806-4927-be55-b9d604ecc0ee', NULL, '8a604b93-3e2b-4a83-99fb-f1597d529e5b');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('36966de8-38b3-44a6-b755-7a9be13282ea', 'Me', '8a604b93-3e2b-4a83-99fb-f1597d529e5b');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('169c8d76-4f3e-4d4b-8bd6-7922d9d4ff29', 'Anonymous', '7bacd2a1-11a3-4e96-bdba-d5adce9f8906');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('c8b18e80-dba8-49a1-b398-2f66ff749437', NULL, '5db7206b-a467-44e9-bc45-d85d26b3d486');

INSERT INTO list (id, editKey, other, version)
VALUES ('ed7ada4e-52b5-4147-b5be-5b71ab9111d0', '9d23b903-6619-43ba-95a5-3b7a89889a85', '{\"name\":\"Editing stuff\"}', 1);
INSERT INTO category (id, name, description, listId)
VALUES ('d64e1a76-a387-4162-b34d-94222690617d', 'Dummy name', '', 'ed7ada4e-52b5-4147-b5be-5b71ab9111d0');

INSERT INTO list (id, editKey, other, version)
VALUES ('ef1d53b4-b8e7-485e-b137-8a02236c33b9', 'd78f4ab0-fd67-49ce-b4c1-dc9d3b3dec5b', '{\"name\":\"Who\'s bringing what to the Sunday lunch\"}', 7);
INSERT INTO category (id, name, description, listId)
VALUES ('e03130e1-477d-446c-8fbd-d0a8056896f0', 'Dishes', '', 'ef1d53b4-b8e7-485e-b137-8a02236c33b9');

INSERT INTO item (id, name, url, categoryId)
VALUES ('cc7638f1-1f56-4b9f-9e9a-5bfb79f267ad', 'Meat', '', 'e03130e1-477d-446c-8fbd-d0a8056896f0');

INSERT INTO item (id, name, url, categoryId)
VALUES ('e1d5a441-111c-4621-b96e-ebc993d063b1', 'Potatoes', '', 'e03130e1-477d-446c-8fbd-d0a8056896f0');

INSERT INTO item (id, name, url, categoryId)
VALUES ('409ec5c8-df6f-429a-899d-356ece6bd52e', 'Salad', '', 'e03130e1-477d-446c-8fbd-d0a8056896f0');

INSERT INTO item (id, name, url, categoryId)
VALUES ('8c85facc-1e8e-4dc1-a809-19f522f5477e', 'Fruit', '', 'e03130e1-477d-446c-8fbd-d0a8056896f0');

INSERT INTO item (id, name, url, categoryId)
VALUES ('9b4d1f46-cc16-4237-8183-ff4e6e56f18a', 'Dessert', '', 'e03130e1-477d-446c-8fbd-d0a8056896f0');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('4bc81dbf-ebfb-4967-ad67-fb05639b6b75', NULL, 'cc7638f1-1f56-4b9f-9e9a-5bfb79f267ad');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('0494d422-d2d7-485c-bccb-bbad24aff083', NULL, 'e1d5a441-111c-4621-b96e-ebc993d063b1');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('5350400f-07f0-46d2-b403-be6924cf849e', NULL, '409ec5c8-df6f-429a-899d-356ece6bd52e');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('d2e99505-da7c-48f2-bc52-6e4c2c7f3978', NULL, '8c85facc-1e8e-4dc1-a809-19f522f5477e');

INSERT INTO checkbox (id, checkedBy, itemId)
VALUES ('26fc784c-cac3-4256-9ba5-0cb4e7584b1f', NULL, '9b4d1f46-cc16-4237-8183-ff4e6e56f18a');
