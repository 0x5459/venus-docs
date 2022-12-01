(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{323:function(e,t,r){e.exports=r.p+"assets/img/venus-cluster.39d38e43.png"},441:function(e,t,r){"use strict";r.r(t);var n=r(17),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("Venus is one of the 4 implementations of Filecoin storage network, which focuses on distributed architecture and a more concise division of functionalities. Storage resources are geographically dipersed, which means as long as there is internet connection a storage system can be connected to a Venus chain service.")]),e._v(" "),n("h2",{attrs:{id:"architecture"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),n("p",[e._v("The Venus components/modules includes includes "),n("a",{attrs:{href:"https://github.com/filecoin-project/venus",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://github.com/filecoin-project/venus-auth",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus-auth"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://github.com/filecoin-project/venus-miner",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus-miner"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://github.com/filecoin-project/venus-messager",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus-messager"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://github.com/ipfs-force-community/venus-gateway",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus-gateway"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://github.com/filecoin-project/venus-wallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus-wallet"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://github.com/filecoin-project/venus-sealer",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus-sealer"),n("OutboundLink")],1),e._v("（soon to be replaced by "),n("code",[e._v("venus-cluster")]),e._v("），"),n("a",{attrs:{href:"https://github.com/ipfs-force-community/venus-cluster",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus-cluster"),n("OutboundLink")],1),e._v(" and "),n("a",{attrs:{href:"https://github.com/filecoin-project/venus-market",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus-market"),n("OutboundLink")],1),e._v(". Based on functionalities, the components can be broken into shared components (chain services) and local components. As a storage provider using chain services, it is no longer required to maintain chain synchronization, micro manage the sending of each message and other interactions with the chain. As a chain services provider with hardware resources, it can build chain services for other storage providers and potentially charge service fees from them. For large storage providers, they can also take advantage of venus architecture to allow quicker expansion and easier maintenance.")]),e._v(" "),n("p",[e._v("The following figure demonstrates how each component interacts with each other. In this illustration, chain services is serving one storage provider and can easily scale to serve multiple storage providers.")]),e._v(" "),n("p",[n("img",{attrs:{src:r(323),alt:""}})]),e._v(" "),n("p",[e._v("The following shows venus components to lotus components relationship.")]),e._v(" "),n("ul",[n("li",[e._v("venus-auth --\x3e token authentication service extend lotus jwt")]),e._v(" "),n("li",[e._v("venus-miner --\x3e lotus-miner block produce part & multi miner")]),e._v(" "),n("li",[e._v("venus-sealer --\x3e lotus-miner sealer scheduler part/wd")]),e._v(" "),n("li",[e._v("venus-cluster --\x3e lotus-miner sealer scheduler part/wd")]),e._v(" "),n("li",[e._v("venus-worker --\x3e lotus-worker")]),e._v(" "),n("li",[e._v("venus daemon --\x3e lotus daemon")]),e._v(" "),n("li",[e._v("venus-wallet -> lotus wallet part")]),e._v(" "),n("li",[e._v("venus-messager --\x3e lotus mpool")]),e._v(" "),n("li",[e._v("venus-market --\x3e lotus-market node")])]),e._v(" "),n("h2",{attrs:{id:"how-venus-works"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-venus-works"}},[e._v("#")]),e._v(" How venus works")]),e._v(" "),n("p",[e._v("For more on how each Venus components work, please go through this document "),n("a",{attrs:{href:"https://venus.filecoin.io/guide/#how-venus-works",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);