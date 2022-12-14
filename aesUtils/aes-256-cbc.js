'use strict';

const crypto = require('crypto');
const ENC_KEY = "1155fd442b3e9f313748ded20f57ebfe"; // set random encryption key
const IV = "5183666c72eec9e4"; // set random initialisation vector
// ENC_KEY and IV can be generated as crypto.randomBytes(32).toString('hex');

const data = '{"kty":"RSA","n":"yisnZf2GPxaUiP7zah_sz66SGtfcR2W4TJxMqGfUkQ9y5g2B_fmjTgdyMdmYNsfVo2Py9O4-a1SCO5fYzSSTh-0-u85UEKyu2gYFJ9HDFozPVo9n0G6VbcYCxOZGCWGN0-HBpCod6ZwGWvrLQRk6ZPtLTiX16Bc2nVPICeSPgrgNYSqcivqRaZGJ7j38Nd826sIkJkg0E2gqqxsRCff3WHcCT1Azqdak3hgrU_pJSIp3ai1-5gxrDa4z4SGJPWtQVTzKrP3Q84GJyP7xPTQJGqZvXBh5kkls5J0_STbnxX2Qc6mZ0fIwje4CgTomtRtg3j4oJMDB4wLD5_qQPNsPNLkSGpNpx8CV-zNx-epf8qb_15c6xgjZpxRNmp2hIUjtNHrnIRWdxQgnDy-V0wsclsChFM6001blCA-vL4m4kq5utDiSv0cs2LBJyuHbJaVek4TUKA-dA4fmDLNg-tb-cNR-3f3HPJ_J55av3sndGC_UGxeVdGoL5eWbQ6rs8NtlxMCFtNKp_uXk55RYpJ3AkV3I1-RjPDwRe_uA_RMa4IyuWjRwBk3sv26KYvTJaM07-E30aRSxRuiL49MftL1WA1grwMxNJHUQhsgytK7NxeoggiVGf1Z7cuZAUnk5q26tK-q8E_pozgRqNrjyCHOlJPj-KUXDG703wqE02tyJhac","e":"AQAB","d":"JhKWatihzYO9GUeaI6Q7fqkLjs6UB0YavSK6NQTIvUDBjJ2Cm4fFv04brVOjHL3pd8m82W98hc32cK6Z_5ghyHlfVRL4NeOvUhPMKMGSEc8WxOBg1pncvj2KC_apvd6HTR24z-e2lmXxtHSCjpHns1i3x9HSS5EDkgFTLLnEZQOwUVoq_OlPNShZZ2p48tREjVVeZW83j2gQkQSZ4ty10g0nfDRIZnWrur-meTwrTOP2tSI4Qa6ZAoyJ7J3aMJzjFgpKyOVL0m_UuOt6FuKTzFcHpbpeOrRlM3CBmJIkd8a7y2xnMWiAyFnIUvnWjEjJp1DhUnqSiOPebPN88lj2tctsg2VgpmlwN_twBg-9oRo6Y9g9_p33eWLecm8CaOKy9qo6XjsfUYkn3v08namWdMXlFU2d7B-9_raaeTbT6jkik6DY7cWMKVyGGtVIm5Qvrr4YCSYXjjYTarWDfQHg-BfQ6h7niX8ZJ0QrlhAAX7pu7YnhCkfNIyOf0FrV7ptunxYl52CXqfmJj8nRlijR4c1e0QiLan8KUWYXRutrE_10brOSvwPZbG5BRvdDh4tBcKkkXKv54aR9_2jMURYBq8YnXTBX0U4lqTZPZo4bUryOkXj3iZAXjLjzrMyyWIXt_RCTxNorj0eQEzrqCNG1iA-uBD0V7h27ieuGsmPyOYE","p":"5Nd-SDUwp2iraapI-snPWMVK4hJnAeWkCcenk_fEyp67G5OVaHQhh8Au2aP0TAv_a6gMPA2IfY12VdnoP3sY3LWBRh6qd32lLNj98nDW7U-xBpfJ9azlR9qxa5nijXQDw8Tj429rGv8I9BFqc6aVU9rdm_gh6rx318QaK2TDUdlRu6wMlEaxw_FbC1A6j-doANA6abJ-owWjkLhtpiMPSy8bdv0Yygj6IV4YgayVw6jL6jdP29idJfbbdW-tum7YqSphO_jcO70aLGbao-l_fKkeq6hU5DlQDFsPOWWwinfZg2USo41LLTpJ9XqgyawFk4QJDOA3ECFYJGx5PqzjBw","q":"4ilLZsqkvq_AIo50AA_rI4Kl4COKi4kJgWu-5zZJLh7SX4Mo_uVsu3zmyMgeQTLkJ1fM52FwJoAhqgtgvAIhpKeioosCYeBsn4lfY0BOs9eRGv0z3hpXy-_16i9VkqL8QMkz-jMjUA1nLJ6oM2YEMNZE-YyPK-W1TvN_ESLX2AL1mIOWRUtPw0CO1GxEgJfaL13z_MaqDJrVNt9bDtcOmaR-qtV7gPoKwMEnIp9mf36ZUMJUVIviK8tBOXo5fbj1LCPcRZhS4to4YV-kfxeIRAm0DB6hw1ZSdv0Ucn-IuIO_iYwTWEJnWsn7OJePk8WP9bdxAsmFefxpmBuvA1yAYQ","dp":"IuoZ80xiOviGRp3bep_1ybZ4QVvLaYeu6msSz0mbNcrYA1IWFpS5VOvmegBA0qV19-fwzezGqVk-98RCYgUW-v2aVqdxHMAHxnro6-d5c0WYXcgk4R3a8YaVUTRuU2Si-mh82IN0VO8aX5qUokaFPAEFlLlb-2N76WibEYnTHxbIGJkcZjcPAjU9zdEUzkXhIVajwuKf3aGLnhX1bMamm7L5PsNI1_Jcr2Ca3pYFV4_WZMrBnWpEN7mdLCK439vvpIe5xBupBlhIuQOMUjva3psy-b-6DAQOiYQPI5O3RrkYb6qpGFkDYkglZpWqGHrtct9PPi6rWAOuXghKy1w3Ww","dq":"cvFB3TBIopF4ORflZNKyUw3neA8YLuqq5hf4olI4xzPq_5gNkd7QcEl-kbUDi2duBYDeJwqikS617VJzC5qZtrFsOugjgdMp4btTu4HHfielG-5sGgmRbZi7hxYfi7NCOTsJK7Qp0lm9gjPwkI7cumVsENibO1g32bRvdCodQS_f2m-mQ_mOxFFfRh7wgdqrjT9W7bWaX2Whz42dHeG3DedIaVKuvlJWfLiuRy50TX_uM9lQOtgNTuyybZ_s8DS8hn6DSOut1JXL6dFOLTmsi8fStgYreLe6mbbuWXLv7bcn9aQ3gLffB4l4IL8Gvbe-_scIrL33FJRwploLjM3KgQ","qi":"D2qpHr6x-0dqRAIrdxmJonjBp7M_B4MByx-JbTBqq5SrLtlrkwuFL_p6ixuNlB4cxj7_sCZf_GLtYu-SgU_shfNc52kc7wIwKy65v0Xwt4bmocKqlVYs9C-YJb2orkAx8Aeq9277teh1uHTI91aD327xY79bzWuwywz9CsU-vDDGwxGoivWlKUrCe7GMLvlhicza_BFlG-aHUiXRmB3g3ujrDySI2b0nHDQLe99lKbg7mPkdv-yAkks-4GhcEdlI7qmXD_w_h5Df2cUdrBcfVwkwCxqRSJlfpasg9ZT-FoYCvfRlfMmVhOsivurY_PXgfQu3AZLE--9ZIeMx44vi7w"}';

const encrypt = ((val) => {
  let cipher = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
  let encrypted = cipher.update(val, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
});

const decrypt = ((encrypted) => {
  let decipher = crypto.createDecipheriv('aes-256-cbc', ENC_KEY, IV);
  let decrypted = decipher.update(encrypted, 'base64', 'utf8');
  return (decrypted + decipher.final('utf8'));
});

(() => {
const encrypted_data = encrypt(data);
const original_data = decrypt(encrypted_data);
console.log(`encrypted: ${encrypted_data}`)
console.log(`origin: ${original_data}`)

})()
