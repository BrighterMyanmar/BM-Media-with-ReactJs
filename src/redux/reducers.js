import { combineReducers } from "redux";

const initialData = {
   title1: "မနုဿကျော်ဝင်း",
   title2: "မြန်မာဝီကီပီးဒီးယားတွင် ဆောင်းပါးကောင်းများ",
   shortDesc: "၁၉၆၁-ခုမှ စတင်၍ ပညာဆည်းပူးခဲ့ပြီး ရန်ကုန်တက္ကသိုလ်မှ မနုဿဗေဒပညာရပ်တွင်",
   para1: "ဆရာမနုဿ ကျော်ဝင်းကို ကချင်ပြည်နယ် မြစ်ကြီးနားမြို့တွင် အဖ ဦးအုန်းမောင်၊ အမိ ဒေါ်လှရှိန်တို့က ၁၉၄၅ ခုနှစ်၊ ဇွန်လ ၃ ရက်နေ့တွင် မွေးဖွားခဲ့သည်။ မွေးချင်း ငါးယောက် အနက် သားအကြီးဆုံး ဖြစ်သည်။ အမည်ရင်းမှာ ကျော်ဝင်း ဖြစ်သည်။ ၁၉၆၁-ခုမှ စတင်၍ ပညာဆည်းပူးခဲ့ပြီး ရန်ကုန်တက္ကသိုလ်မှ မနုဿဗေဒပညာရပ်တွင် ဝိဇ္ဇာ(ဂုဏ်ထူး)ဘွဲ့ကို၎င်း၊ မဟာဝိဇ္ဇာဘွဲ့ကို၎င်း ရရှိခဲ့သည်။",
   para2: "ဆရာမနုဿ ကျော်ဝင်းကို ကချင်ပြည်နယ် မြစ်ကြီးနားမြို့တွင် အဖ ဦးအုန်းမောင်၊ အမိ ဒေါ်လှရှိန်တို့က ၁၉၄၅ ခုနှစ်၊ ဇွန်လ ၃ ရက်နေ့တွင် မွေးဖွားခဲ့သည်။ မွေးချင်း ငါးယောက် အနက် သားအကြီးဆုံး ဖြစ်သည်။ အမည်ရင်းမှာ ကျော်ဝင်း ဖြစ်သည်။ ၁၉၆၁-ခုမှ စတင်၍ ပညာဆည်းပူးခဲ့ပြီး ရန်ကုန်တက္ကသိုလ်မှ မနုဿဗေဒပညာရပ်တွင် ဝိဇ္ဇာ(ဂုဏ်ထူး)ဘွဲ့ကို၎င်း၊ မဟာဝိဇ္ဇာဘွဲ့ကို၎င်း ရရှိခဲ့သည်။ ၁၉၆၈-ခုနှစ် ရန်ကုန်အထိ ဝိဇ္ဇာနှင့်သိပ္ပံ တက္ကသိုလ်တွင် နည်းပြဆရာအဖြစ် တာဝန်ထမ်းဆောင်ခဲ့သည်။ 'ရွှေအိုးလေး'၊ 'လှမြင့်'၊ 'မောင်ဝင်းနွယ်(ရန်ကုန် တက္ကသိုလ်)' နှင့် 'တက္ကသိုလ် ဝင်းသူ' စသည့် ကလောင်အမည်ဖြင့် ဝတ္ထု၊ ဆောင်းပါးများ ရေးသားခဲ့သည်။ မိမိ အထူးလိုက်စားခဲ့သော မနုဿဗေဒ ပညာရပ်ကို အစွဲပြု၍ ၁၉၆၈ ခုနှစ်မှ စတင်ကာ 'မနုဿကျော်ဝင်း' ဟူသော အမည်ကို ခံခဲ့သည်။ ကွင်းဆင်းလေ့လာမှု အတွေ့အကြုံများကို စာနယ်ဇင်းများတွင် ဆောင်းပါးနှင့် ဝတ္ထုတိုများအဖြစ် ရေးသားခဲ့သည်။ သုတေသန စာတမ်းများ၊ ဝတ္ထု၊ ဆောင်းပါးများ စုစုပေါင်း ၄၀ဝ-ကျော်ခန့် ရေးသားခဲ့ပြီး မြန်မာ့အသံ ယဉ်ကျေးမှု အနုပညာ အစီအစဉ်မှလည်း အသံလွှင့်ခဲ့သည်။",
}

export const siteDataReducer = (state = initialData, { type, payload }) => {
   switch (type) {
      case 'add':
         return state = payload;
      case 'remove':
         return state = {};
      default:
         return state;
   }
}

export const loginReducer = (state = false, { type, payload }) => {
   switch (type) {
      case "login":
         return state = payload;
      case "logout":
         return state = payload;
      default: ;
         return state;
   }
}

export const userReducer = (state = {}, { type, payload }) => {
   switch (type) {
      case "add":
         return state = payload;
      case "remove":
         return state = {};
      default:
         return state;
   }
}

export const categoryReducer = (state = [], { type, payload }) => {
   switch (type) {
      case "addCategory":
         return state = payload;
      case "removeCategory":
         return state = [];
      default:
         return state;
   }
}

export const tagReducer = (state = [], { type, payload }) => {
   switch (type) {
      case "addTag":
         return state = payload;
      case "removeTag":
         return state = [];
      default:
         return state;
   }
}


const reducers = combineReducers({
   siteData: siteDataReducer,
   loggedIn: loginReducer,
   user: userReducer,
   category: categoryReducer,
   tag: tagReducer
});

export default reducers;