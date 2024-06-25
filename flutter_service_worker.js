'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c450bbb894ff0d312ae14226f39cc941",
".git/config": "551f19c0acd4fdbbe79d58b7d32ca715",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "10d30f704c7b850b0abe0a2a9b515127",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "525d9dd1d6ccbd4f45f18d8d42c92ab1",
".git/logs/refs/heads/master": "525d9dd1d6ccbd4f45f18d8d42c92ab1",
".git/logs/refs/remotes/origin/master": "16f3f70307827abc23143fa75284d643",
".git/objects/00/2731541d6bc77ed97e03f039d40743f844571c": "769a50e05b3292324fe5c138c32f233f",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/8dc3e4b41fe5649de96bca90bc46e82451a159": "bbab551729ca055ea3a4ceaecc843bc1",
".git/objects/0a/cd8d03612a5b892fd3fa7757adf1128e735519": "e74f2635ec050548796f87de1d5f8f53",
".git/objects/0c/b5512f8f22ed2f52698e68623e8f61390e1683": "8ac76b02e90135ef61cf6e18edd6c76f",
".git/objects/0e/406e624e0dcc8fab16623f29728f5bc82c5dae": "e3519d8e777b73267ce67e498c5bc70d",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1a/7ecdb874e3b3c8f21753ca480435d1fb89c828": "403aad32e78fdf034f4492a880d01731",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/26/2e08fe676ab8f956e1e9bc36e16f1f11100a05": "7b1a44f375179a1b58eb2c9d7aafb8cc",
".git/objects/31/f4ffbcb1b1cf9275ad53e1650ec3820739e3e4": "37b32ef6f68dc0429ca6e77d3ecd8a3d",
".git/objects/3c/90de0c331abd284aa6db95a023e37a22a2d212": "edda023233a8d7976de75e78769d3d1d",
".git/objects/3d/cb1cb7245f8a1a8c92c247c1bae447a8a5bf2b": "40a14041dcf1755102293ef7cee1d71a",
".git/objects/3d/f73ddba686acd28a672c2f9fb03f0ce8339bec": "e88c414b9ee951560788e2817a468964",
".git/objects/3f/061fd83b9d842d7f849360bd2849a15af65bc0": "4e28648b9257e4e143de29e6c6f94df4",
".git/objects/40/de9922f044ba771287694c18afee44a01efeaa": "90a8e009847d0d09f2a56bc3537de8cf",
".git/objects/41/f96f6d897baa43660d50445b0eeb53bc6f4eb6": "6d5a05ca9543c85fcf0a2c4943282a01",
".git/objects/45/a3fbef034da825407ee25d07d19b05ae999f99": "04ad8b25c4d096e325bf386e60950e57",
".git/objects/48/073b6624fe2484c08fd2c63870729fafe8928d": "7ba659e88b0cd64b065d721384be81ab",
".git/objects/48/3cc34e9459388cd6ab16b09a78ed36ec3f737d": "8282e04cd88cd04b22828af74498d9fd",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4c/c87d78b9ffc010c73e0f5486734960e0f77658": "7656b8d82ada6856ca8b47636bb45df2",
".git/objects/50/c54f71bf3ec9e53a2e53a81c75ef57ff865650": "72bcfc6cb8acfd8e50b891eb89fc3200",
".git/objects/51/c14d05d670315b9ce80770428527864cacdac8": "54f98d2ef47469978033d9aac10a2450",
".git/objects/53/0d1e4b2f0184a84b29be9573979b7d4c89027c": "d6fa7a6581ff5505d417899ada527c0e",
".git/objects/53/7d2d5a596dde3b284372db6af0b72e8aabb0d0": "7b333aa8c199faddc4e357777ec329f7",
".git/objects/55/a52489a9172d9f495ec9f2b0ee154b3ad8e9b2": "b4bd78cec0fadfa516784609c8cb2cb5",
".git/objects/56/968e4e074ee8448b47624720e40add732303bc": "c1a8e19e9349ada0dd958169b1d020cb",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/562780e8dd11ff8f505196b91a042a18b5faeb": "66cccb2affebb6f2de515c39cc7bef2a",
".git/objects/60/1d81fcb3612609abb7afe652c31f66132d2563": "0edab8f4e7504692287e8ce4a2cbf6d7",
".git/objects/61/1cc794ffc188b590fc8a2798f1d5bcf1c5278b": "06b44593d5929e1ff5beafaa05d687b8",
".git/objects/63/d7928567d7616348f5cdc26fe4e6d2dba3d936": "d77fbdbde66066215e7b18b009a353ac",
".git/objects/69/31e78711fdcf35016e15ce08f19ddf5d6f1c5c": "6fcdc2bfc100d1d7933ef0edb464e674",
".git/objects/69/be95d338c6dce8f22cb25c035a87cf78ca4213": "b192303507a3c8b9111fe7f2d4a8d85f",
".git/objects/6b/2a67c01618b3328a09a224030e90e03dfe3d9c": "4e29787f8cbb0fcaf77b7354b6f84460",
".git/objects/6e/521ede158100554b30f9d7d918b90302e85717": "9ebd9add0b843ec4b870c6a8d33abd7e",
".git/objects/6e/62f47b57978a8d01361a368522ab923bd8a2c4": "290121015b10066af129d5e9f07c46ed",
".git/objects/6f/864438f04d8f45c054081ba6ed6bd799a6bc2f": "0a101a251c62dc252a2ba6c3f324e398",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/79/63d504d0f4333ad8ae975c501b626007962bcf": "187c4a34d24ffb1d47708e75b6229f3e",
".git/objects/79/9ddc8bd708fea664721f862a9e1c4a13f32105": "78e886cdcadb75b5806e1a46d3bdce6f",
".git/objects/7b/4f28bafe401f046003195de2422bd5c18955fd": "2afc7bf4780a3d5253a824bce50b1bf0",
".git/objects/7d/7249d2733f58cfe14bfe941f2913991d0b4b7d": "94de3b3b8db4aafbeba7439bca943c2a",
".git/objects/82/f09de75b0f1d5ad50b59c1bc934b1c3f59131c": "b8944849592d56e5393c909b99f5b19e",
".git/objects/83/32debaeb13d3602c0514e5ef37ea2b95b2aa48": "ff35fb1e8ecda69cec6e373ccd4b2df6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/a2fc0ab00f6fd330bf23f5aeba8a003c0e7963": "123f46cf13a2e900ef00e3501875a52e",
".git/objects/87/eeede77696b7e510347c07c4598069163dc870": "6e83eb9c4dacd6a9897a64df480c7b37",
".git/objects/88/3539ae45988a248c9c348d1ac386d6a864b214": "99d20133df0047e65a15d49d88b2e8d0",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/812eb6d3bd61acaa93035ac6050c9a43b3a764": "3739542e24f7f8e136f236ae3735d581",
".git/objects/8e/08c5a609b3bded31b42e12ce35e8a92515dbc3": "e247e3bf88deff9a856e4d0850f8a0b3",
".git/objects/8f/01e1801a79cc3ff0ef11e0c5d208fb25e02049": "a3fdf164190c99cc384dba4ec20fe4e4",
".git/objects/91/3dc7f4a22a718850120b31ad2aeef6fc311737": "06600a95f5df85be07de70387d075580",
".git/objects/94/42d0c72308ec0f19b1d98c8f577deeb6375d38": "9963b3f9f9a3a01b6ddfc64b63e80252",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/49c5ea54c9550659dacf5bf26a052c8166ea1d": "cc6ebbda2d95a89f2cf31535665d4c00",
".git/objects/96/3600a8d762b71127c21a637f8cf63bbf263573": "f5852768416e28f4d89198a508e2d94f",
".git/objects/97/a5bd854e7957a97294a56258cf731835eebf82": "dbf0e4b12ced40fc3071ab43f6f045dd",
".git/objects/98/b82c444c59424e2920949a87571e653bb686bf": "11d8b4bd1872f3403e34a35382081277",
".git/objects/a9/e238c934d85e4ef2369b51a8f6f01dc4ef157f": "d82835674dfdbb11dfda04ce84fea214",
".git/objects/ad/91d61644ba6c3d07d19481da8abd1f627a55dd": "50bc4b780562f614bbabd95daa874f57",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/f2dd887194e63c53e1fcbb7d5c89646c6a2a1d": "f546ea231b2873b514c1fa3de4ee1eb8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/6aac5f86a09312714cb529b75a3f8985b16419": "ce43555a119e6cbd1f9370a162dfff03",
".git/objects/c1/923df61795c648d10ea6ff83f2001ac54dcb54": "f8f6f0bfe6be7585202d20620e8b992d",
".git/objects/c1/fddb601dc0ef885aeccd1a61558fbd8e208d6f": "7bfb24ab8d59b6ed1500fed2ceff5620",
".git/objects/c2/fbd2e383268a216d70265b22a15a9645ac30da": "8f22921e3a53b4e94c30e45a7b6b0bad",
".git/objects/c4/1ca2e0bdeee57ffe9d87b0633a443751ca6728": "1fe66de486199db3ef152871e6893abf",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c8/4f9128128d5f37ccc58b0496df884fc9ec1da4": "beded4deac82abc55790dc0670784ae5",
".git/objects/c9/bc3dded260b4ac442a9fd98bd66c3bd4c3a022": "fd5a52f1f614ac75ca9cb66e69497efc",
".git/objects/d1/675a3395b77debdc1b632c3aac0d8b26c8ae16": "6a0c1cf829193300ca87f688f7a3c126",
".git/objects/d2/addecaea1ffddbcaa078b8e8e47c5f7ea77a28": "b33bd77455242d4e660d91a50cea5865",
".git/objects/d3/350fe075e790f5ec61e49d21080f0ac9e42f15": "c24faadac151ca76ad8f9469623314ab",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/c7ea1cfb92796609f08dd81c1b83b20f594824": "447dbe232f0d18d5df520358b1d072a1",
".git/objects/db/2a234f2024c4045ce6483c39b47d6f48d39ae2": "29b86978a8f45647da9f9173f4233c8c",
".git/objects/dc/39d259332c92fc589527678655c154f5ce3591": "a3a588b44c4f74ef7d0652dc7b86ead7",
".git/objects/df/498a79e35f146ed8aa9edd3e3a54a0f47043fb": "afdc74026fe07e947b5bcd2d329a8da1",
".git/objects/df/8c417ae1be234eb8d4c543b6e1637c5c47161b": "dfb698dd615877a057c1b4dd5824ff48",
".git/objects/e0/c75600c546f0050bfb3dd9a7c16b0c7810824a": "9c2cb3e6c4f1242da538249073362798",
".git/objects/e5/43c3f36cd49878493ce7f605b508242bf28434": "f13a58aa914ae43dc039cddda23aea4c",
".git/objects/e7/206a03b260c33610732294cbc070efe6c1062c": "e45c01f5127ae87b3733cb9dfca69e5b",
".git/objects/e8/0f8d411d27d56a383f56ca79c783f5cf97d4d6": "49b50ffd00864196eb97a38e53757795",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/403fd640e9fa9ad612029cf6d0531160aad3b4": "add2e2ba256a16a0c2f8a4a26992862f",
".git/objects/e9/8a22d3ec2743e450720913c7ac006204709aff": "d447c778fceb5ac1ef19fcac9f15bb2b",
".git/objects/ea/132018d0abcde09b7d5c50d3f2f187cf7b8102": "4a906a63f722040b0f3dbba6b43a9274",
".git/objects/eb/6562f29d8fd668d619f2cbb950be1c9df6482f": "2a1f2b68f2dbbcd2527f82b643c991c5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/2a44a0327062048956f9637ace74b04731e84c": "4280cc32411c8f440f92dafe1511b973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/114aa899d4f559e571b68293bff645061ea438": "834fd69d5877b1604758015720edc380",
".git/objects/f7/eb2bc21e5bec82f7feb09f61055bc9df73242e": "8dc412ed2229775c79604355f47ebc0d",
".git/objects/f8/688253bab090b7382272d8cbcc041042353603": "3953372c685f55a9e6ce3128f08606fd",
".git/objects/f8/c7845d60c86500cf11c0a0a8b98881a80a3887": "dab6d664ebfaf9fd3bec130744ad01fa",
".git/objects/f9/d4516d3790a8973d885ed0c65c506878425f60": "63ab701b707b9a2c41b49a44a90d01cd",
".git/objects/fb/2408e1eb2d799d02015f4521be0e85ecd6b837": "367d22a969aa7dbd1d4974537128f091",
".git/refs/heads/master": "18a92dccaeebf2b07642623fe88114ba",
".git/refs/remotes/origin/master": "18a92dccaeebf2b07642623fe88114ba",
"assets/AssetManifest.bin": "29480d50192d1bd07bd45670d67cac6b",
"assets/AssetManifest.bin.json": "3fe39f7ab278fe686e054f4ad14f90de",
"assets/AssetManifest.json": "fe4eb89f0c50cc9d0c9b5d089851d978",
"assets/assets/7ady2a.jpg": "685532bdb5b34d57640e84f690767fcf",
"assets/assets/ansar1.png": "622a65133709d3d3d2aa9dbce66b2dff",
"assets/assets/ansar11.jpeg": "1c0fac843e4e6b74435014d66c65bd7b",
"assets/assets/ansar2.png": "1b18d98df2593e544f7b663a5a7f53e7",
"assets/assets/ansar3.png": "46feff83e152a50b8b5e5bd839ff502d",
"assets/assets/ansarlogo.png": "82d1ec1b9d9d1cd55a793c17feb47b2b",
"assets/assets/ansarportal.png": "01633cd1a11f0fbe323112aa887f902a",
"assets/assets/ansarportallogo.png": "76a7d179275fa33e53dc0298c0fda0ca",
"assets/assets/ansarportallogofinal.png": "963f8daf9ad5865f84f8371fed66c158",
"assets/assets/ansarschool.jpg": "488861fce9660abd35e462df16a1f2b0",
"assets/assets/bldye.jpg": "23fc8b1e8d505b50141edd7e206291a3",
"assets/assets/facebook.jpg": "35408b77b5d087c13581c9eec63b6b85",
"assets/assets/facebook.png": "0833b053623deeac53edebf59cfc5429",
"assets/assets/fneq.jpg": "7b559a8bb3503fd208424a3ffdffb3bd",
"assets/assets/fonts/Kuro-Regular.otf": "dbb5e819bcd5294521d1df43005fa074",
"assets/assets/hadi.png": "ffbf4cd461c557615844cbeb59932881",
"assets/assets/home-final.jpg": "82f7f9ee56670202b775f8768d7401d0",
"assets/assets/home.jpeg": "a23ee4d9ec054d2ecf0b1589d980d9ff",
"assets/assets/hy2a.jpg": "fa7a4ce1db9d82ee4fab4384f410e125",
"assets/assets/instagram.jpg": "33f1622d7ac6dad087ac794bad663af4",
"assets/assets/instagram.png": "c66e2fb62e76584c28b341a509f95a04",
"assets/assets/mahdi.jpeg": "f1355c34079e36bd897bd41066af6e50",
"assets/assets/makam.jpg": "e2b04594c36faf5c3ad86054e6b10c96",
"assets/assets/mousastadium.jpg": "6df1f7efa579a52f27647ef430058ef4",
"assets/assets/njde.jpg": "e8dab790b915e0a16f89e4ff52df2d79",
"assets/assets/phoenix.jpg": "ec2e0b058e0e634e433ed9b51f0c0847",
"assets/assets/risele.jpg": "860c2be5e78d27347b80ba86c1e4b0b1",
"assets/assets/signinpage.jpeg": "88a296b1d18994f387e62ef0b61da185",
"assets/assets/signuppage.jpeg": "11afc0dabf29d308c46a2ff2bf7ee876",
"assets/assets/sportcity.jpg": "4b377c9613e7f797e49c27e6120fc560",
"assets/assets/stadium.jpg": "e9b2c745cb46ecd68fe749cd77d0c691",
"assets/assets/tiktok.png": "dc2e4738728843d9ca61523053952662",
"assets/assets/tiktok.webp": "40fd7d7f5132f972fdca32f1514fcee6",
"assets/assets/whatsapp.jpg": "5beff6d7e1a95b9686b02e092be0914b",
"assets/assets/whatsapp.png": "5e6704ef3415f0dfb1a518e0329f0d5d",
"assets/FontManifest.json": "d0132096b90d63b0d6236399e26dcbe9",
"assets/fonts/MaterialIcons-Regular.otf": "be63812526685c6ceb49bbfbd82a915e",
"assets/NOTICES": "dbf8fa1f3f015ad161804a41d9dc65f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eafdfd1fe143602951db6ff91b4e5b4e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1c687632220d8e247f2cdb4227cfb4ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "6f83781ef830a81c6cda74eda8150405",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5c8fee8271d9d471db9a9006546c21a7",
"/": "5c8fee8271d9d471db9a9006546c21a7",
"index.php": "f45006f6f768842473d23fcf54a2d80f",
"main.dart.js": "a3117d36b8503172497c50f38e046de1",
"manifest.json": "68b65f57b0ca503ae5611120d0a92a20",
"splash/img/dark-1x.png": "963880f2abdc8b453ec830c82467a0c8",
"splash/img/dark-2x.png": "5f390365cd1d4959e268728bc1d51476",
"splash/img/dark-3x.png": "56316ad4b1f510dc05f78b6280e52fb8",
"splash/img/dark-4x.png": "267eecb3ff029d37c682ad7015f7fd0a",
"splash/img/light-1x.png": "963880f2abdc8b453ec830c82467a0c8",
"splash/img/light-2x.png": "5f390365cd1d4959e268728bc1d51476",
"splash/img/light-3x.png": "56316ad4b1f510dc05f78b6280e52fb8",
"splash/img/light-4x.png": "267eecb3ff029d37c682ad7015f7fd0a",
"version.json": "1ae618eac121552d188728224e78076a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
