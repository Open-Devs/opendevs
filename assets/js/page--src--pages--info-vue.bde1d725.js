(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Vgvu:function(t,e,a){"use strict";a("wl8r")},igWg:function(t,e,a){"use strict";a.r(e);a("ma9I");var s={metaInfo:function(){return{title:"Info",bodyAttrs:{style:"background-color: ".concat(this.data.background_color,"; color: ").concat(this.data.text_color)}}},computed:{data:function(){return this.$page&&this.$page.allPeople&&this.$page.allPeople.edges?this.$page.allPeople.edges:{}}},watch:{data:function(t){t||this.$router.push("/")}}},n=(a("Vgvu"),a("KHd+")),l=null,i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{attrs:{page:"info"}},[a("div",{staticClass:"container relative mx-auto"},[a("div",{staticClass:"items-center flex flex-wrap"},[a("div",{staticClass:"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"},[a("div",{staticClass:"py-4"},[a("h1",{staticClass:"font-semibold text-5xl underline"},[t._v("the craftsmen")])])])])]),a("div",{staticClass:"p-8 flex items-center justify-center info-card-section"},[a("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6"},t._l(t.data,(function(e){var s=e.node;return a("div",{key:s.username,staticClass:"shadow-xl transform transition duration-500 hover:scale-105",on:{click:function(e){return t.$router.push("/me/"+s.username)}}},[a("div",{staticClass:"flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg height-100"},[a("div",{staticClass:"inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40"},[a("img",{staticClass:"h-full w-full",attrs:{src:s.avatar,alt:""}})]),a("h2",{staticClass:"mt-4 font-bold text-xl"},[t._v(t._s(s.name))]),a("p",{staticClass:"text-xs text-gray-500 text-center mt-3 ellipsis"},[t._v("\n            "+t._s(s.quote)+"\n          ")]),a("ul",{staticClass:"flex flex-row mt-4 space-x-2"},[a("li",[s.email?a("a",{staticClass:"brand-icon text-green-400",attrs:{target:"_blank",href:s.email}},[a("font-awesome",{attrs:{icon:["fas","envelope"]}})],1):t._e()]),a("li",[s.github_handle?a("a",{staticClass:"brand-icon text-green-400",attrs:{target:"_blank",href:s.github_handle}},[a("font-awesome",{attrs:{icon:["fab","github"]}})],1):t._e()]),a("li",[s.linkedin_handle?a("a",{staticClass:"brand-icon text-green-400",attrs:{target:"_blank",href:s.linkedin_handle}},[a("font-awesome",{attrs:{icon:["fab","linkedin"]}})],1):t._e()]),a("li",[s.twitter_handle?a("a",{staticClass:"brand-icon text-green-400",attrs:{target:"_blank",href:s.twitter_handle}},[a("font-awesome",{attrs:{icon:["fab","twitter"]}})],1):t._e()])])])])})),0)])])}),[],!1,null,null,null);"function"==typeof l&&l(i);e.default=i.exports},wl8r:function(t,e,a){}}]);