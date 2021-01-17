import GR55Photo from'../Images/Tubas/BaS/BbTuba/bsgr55_full.png';
import GR51Photo from'../Images/Tubas/BaS/BbTuba/bsgr51_full.png';
import BS3198Photo from '../Images/Tubas/BaS/CTuba/bs3198_full.png';
import GR41Photo from '../Images/Tubas/BaS/CTuba/bsgr41_full.png';
import MRPCPhoto from '../Images/Tubas/BaS/CTuba/bsmrpc_full.png';
import BS3099Photo from '../Images/Tubas/BaS/FTuba/3099_full.jpeg';
import BS3100Photo from '../Images/Tubas/BaS/FTuba/3100wgj-l.jpg';
import BS5100Photo from '../Images/Tubas/BaS/FTuba/bs5100w_full-1.jpg';
import MRPFPhoto from '../Images/Tubas/BaS/FTuba/bsmrpf_full.png';
import PhotoBb195 from '../Images/Tubas/MW/BbTuba/195p_full.jpg';
import PhotoBb196 from '../Images/Tubas/MW/BbTuba/mw196_full.png';
import PhotoBb197 from '../Images/Tubas/MW/BbTuba/mw197-1_full-1592x945.png';
import PhotoBb2011 from '../Images/Tubas/MW/BbTuba/mw2011ra-1_full.jpg';
import PhotoC3225 from '../Images/Tubas/MW/CTuba/3225_ursus_fullcopy-1.jpg';
import PhotoC6450 from '../Images/Tubas/MW/CTuba/6450-1_full-1.jpg';
import PhotoC3450 from '../Images/Tubas/MW/CTuba/mw3450_full.png';
import PhotoC5450P from '../Images/Tubas/MW/CTuba/mw5450_full.png';
import PhotoC5450R from '../Images/Tubas/MW/CTuba/mw5450ra_full-1592x945.png';
import PhotoF4250 from '../Images/Tubas/MW/FTuba/meltonmeinlweston_tuba_4250_full.jpg';
import PhotoF45 from '../Images/Tubas/MW/FTuba/mw45seni.jpg';
import PhotoF182 from '../Images/Tubas/MW/FTuba/mw182_full.png';
import PhotoF2250 from '../Images/Tubas/MW/FTuba/mw2250_full.png';
import PhotoF6460 from '../Images/Tubas/MW/FTuba/mw6460_full.png';
import Photo1291 from '../Images/Tubas/Miraphone/BbTuba/1291.jpg';
import Photo9000 from  '../Images/Tubas/Miraphone/BbTuba/9000.jpg';
import Photo88 from '../Images/Tubas/Miraphone/CTuba/88.jpg';
import Photo291 from '../Images/Tubas/Miraphone/CTuba/291Bruckner.jpg';
import Photo1293 from '../Images/Tubas/Miraphone/CTuba/1293.jpg';
import Photo7050 from '../Images/Tubas/Miraphone/EbTuba/7050.jpg';
import Photo181 from '../Images/Tubas/Miraphone/FTuba/181.jpg';
import Photo281 from '../Images/Tubas/Miraphone/FTuba/281.jpg';
import Photo481 from '../Images/Tubas/Miraphone/FTuba/481.jpg';
import Photo1281 from '../Images/Tubas/Miraphone/FTuba/1281.jpg';
import PhotoBb994 from '../Images/Tubas/Besson/BbTuba/be994.jpg';
import PhotoEb980 from '../Images/Tubas/Besson/EbTuba/be980.jpg';
import PhotoEb983 from '../Images/Tubas/Besson/EbTuba/be983.jpg';
import PhotoBb632 from '../Images/Tubas/Yamaha/BbTuba/ybb632.jpg';
import PhotoBb641 from '../Images/Tubas/Yamaha/BbTuba/ybb641.jpg';
import PhotoBb841 from '../Images/Tubas/Yamaha/BbTuba/ybb841.jpg';
import PhotoC822 from '../Images/Tubas/Yamaha/CTuba/ycb822.jpg';
import PhotoC861 from '../Images/Tubas/Yamaha/CTuba/ycb861.jpg';
import PhotoEb321 from '../Images/Tubas/Yamaha/EbTuba/yeb321.jpg';
import PhotoEb632 from '../Images/Tubas/Yamaha/EbTuba/yeb632.jpg';
import PhotoF621 from '../Images/Tubas/Yamaha/FTuba/yfb621.jpg';
import PhotoF822 from '../Images/Tubas/Yamaha/FTuba/yfb822.jpg';

//Name,Photo, Company,BellSize,Key
const mapping = new Map([
    //B&S
    ["B&SGR55",["GR 55",GR55Photo,"B & S",18.898,"BBb"]],
    ["B&SGR51",["GR 51",GR51Photo,"B & S",18.898,"BBb"]],
    ["B&S3198",["GR 55",BS3198Photo,"B & S",18.898,"C"]],
    ["B&SGR41",["GR 51",GR41Photo,"B & S",18.898,"C"]],
    ["B&SMRPC",["GR 51",MRPCPhoto,"B & S",18.898,"C"]],
    ["B&S3099",["GR 51",BS3099Photo,"B & S",18.898,"F"]],
    ["B&S3100",["GR 51",BS3100Photo,"B & S",18.898,"F"]],
    ["B&S5100",["GR 51",BS5100Photo,"B & S",18.898,"F"]],
    ["B&SMRPF",["GR 51",MRPFPhoto,"B & S",18.898,"F"]],
    

    //Meinl Weston
    ["MW195",["195",PhotoBb195,"Meinl Weston",18.898,"BBb"]],
    ["MW196",["196",PhotoBb196,"Meinl Weston",18.898,"BBb"]],
    ["MW197",["197",PhotoBb197,"Meinl Weston",18.898,"BBb"]],
    ["MW2011",["2011",PhotoBb2011,"Meinl Weston",18.898,"C"]],
    ["MW3225",["3225",PhotoC3225,"Meinl Weston",18.898,"C"]],
    ["MW6450",["6450",PhotoC6450,"Meinl Weston",18.898,"C"]],
    ["MW3450",["3450",PhotoC3450,"Meinl Weston",18.898,"C"]],
    ["MW5450P",["5450P Thor",PhotoC5450P,"Meinl Weston",18.898,"C"]],
    
    ["MW5450R",["5450R",PhotoC5450R,"Meinl Weston",18.898,"C"]],
    ["MW4250",["4250",PhotoF4250,"Meinl Weston",18.898,"F"]],
    ["MW45",["45",PhotoF45,"Meinl Weston",18.898,"F"]],
    ["MW182",["182",PhotoF182,"Meinl Weston",18.898,"F"]],
    ["MW2250",["2250",PhotoF2250,"Meinl Weston",18.898,"F"]],
    ["MW6460",["6460",PhotoF6460,"Meinl Weston",18.898,"F"]],
    

    //Miraphone
    ["M1291",["1291",Photo1291,"Miraphone",18.898,"BBb"]],
    ["M9000",["9000",Photo9000,"Miraphone",18.898,"BBb"]],
    ["M88",["88",Photo88,"Miraphone",18.898,"C"]],
    ["M291",["291",Photo291,"Miraphone",18.898,"C"]],
    ["M1293",["1293",Photo1293,"Miraphone",18.898,"C"]],
    ["M7050",["7050",Photo7050,"Miraphone",18.898,"F"]],
    ["M181",["181",Photo181,"Miraphone",18.898,"F"]],
    ["M281",["281",Photo281,"Miraphone",18.898,"F"]],
    ["M481",["481",Photo481,"Miraphone",18.898,"F"]],
    ["M1281",["1281",Photo1281,"Miraphone",18.898,"EEb"]],

    //Besson
    ["B994",["994",PhotoBb994,"Besson",18.898,"BBb"]],
    ["B980",["980",PhotoEb980,"Besson",18.898,"EEb"]],
    ["B983",["983",PhotoEb983,"Besson",18.898,"EEb"]],


    //Yamaha
    ["Y632B",["632",PhotoBb632,"Yamaha",18.898,"BBb"]],
    ["Y641",["641",PhotoBb641,"Yamaha",18.898,"BBb"]],
    ["Y841",["841",PhotoBb841,"Yamaha",18.898,"BBb"]],
    ["Y822C",["822",PhotoC822,"Yamaha",18.898,"C"]],
    ["Y861",["861",PhotoC861,"Yamaha",18.898,"C"]],
    ["Y321",["321",PhotoEb321,"Yamaha",18.898,"EEb"]],
    ["Y632E",["632",PhotoEb632,"Yamaha",18.898,"EEb"]],
    ["Y621",["621",PhotoF621,"Yamaha",18.898,"F"]],
    ["Y822F",["822",PhotoF822,"Yamaha",18.898,"F"]],



    
    
])


export default mapping;


/**
 * ["B&SGR51","../Images/Tubas/BaS/BbTuba/bsgr51_full.png"],
    ["B&S3198","../Images/Tubas/BaS/CTuba/bs3198_full.png"],
    ["B&SGR41","../Images/Tubas/BaS/CTuba/bsgr41_full.png"],
 */
