(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{394:function(t,a,e){"use strict";e.r(a);var s=e(54),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"guide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#guide"}},[t._v("#")]),t._v(" Guide")]),t._v(" "),e("p",[t._v("This page intends to present the functioning of "),e("strong",[t._v("damavand")]),t._v(" in a local mode. The next page HPC is dedicated to the High\nPerformance Computing mode.")]),t._v(" "),e("h2",{attrs:{id:"state-of-the-art"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state-of-the-art"}},[t._v("#")]),t._v(" State of the art")]),t._v(" "),e("p",[t._v("Quantum cirucit simulation is already a rich domain where different methods have been proposed to efficiently simulate\nthe behavior of quantum systems. In the remainder of this page, we focus our attention on the simulation of pure quantum\nstates in a circuit based on the "),e("strong",[t._v("qubit")]),t._v(" model.")]),t._v(" "),e("h3",{attrs:{id:"state-vector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state-vector"}},[t._v("#")]),t._v(" State vector")]),t._v(" "),e("p",[t._v("Damavand is a state vector simulator, it allows to update the description of a quantum state gate after gate through the\ncircuit. The finally updated state can be measured. There are several ways to update the state vector. Here, we discribe\nthe different implementations, by referring to them as "),e("strong",[t._v("apply methods")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"tensor-networks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tensor-networks"}},[t._v("#")]),t._v(" Tensor networks")]),t._v(" "),e("p",[t._v("Tensor networks are a more recent alternative to state vector simulations. It is not implemented in damavand "),e("strong",[t._v("yet")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"apply-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apply-methods"}},[t._v("#")]),t._v(" Apply methods")]),t._v(" "),e("p",[t._v("Let us enumerate the 3 different apply methods implemented in damavand.")]),t._v(" "),e("h3",{attrs:{id:"brute-force"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#brute-force"}},[t._v("#")]),t._v(" Brute Force")]),t._v(" "),e("p",[t._v("The most natural way to update a quantum state after applying some operation on it is to build the unitary matrix that\nshifts the quantum state from 0 to something else. If the system is composed of N qubits, then we need to build a matrix\nof size 2^{2N} and apply it to the state before applying the gate in question.")]),t._v(" "),e("p",[t._v("Consider that we wish to apply a single qubit gate to the qubit k. Then, the unitary matrix, which we refer to as to the\n"),e("strong",[t._v("full matrix")]),t._v(" is built from the tensor product:")]),t._v(" "),e("p",[t._v("F = I x ... x I x G x I x ... x I")]),t._v(" "),e("p",{attrs:{align:"center"}}),e("h4",[t._v(" Target qubit = 0 ")]),t._v(" "),e("img",{attrs:{src:"/IIU.png",width:"500em"}}),t._v(" "),e("h4",[t._v(" Target qubit = 1 ")]),t._v(" "),e("img",{attrs:{src:"/IUI.png",width:"500em"}}),t._v(" "),e("h4",[t._v(" Target qubit = 2 ")]),t._v(" "),e("img",{attrs:{src:"/UII.png",width:"500em"}}),t._v(" "),e("p"),t._v(" "),e("p",[t._v("where I is the 2x2 identity matrix and G represents the matrix of the gate of interest.\nThis means that in addition to storing the state vector that is of size 2^N, we need to build and store the matrix F.\nThis requires a large amount of memory and will further limit our capacity of simulating large quantum systems.")]),t._v(" "),e("p",[t._v("In the following example, we build a circuit of 10 qubits, and update the state vector with the "),e("strong",[t._v('"brute_force"')]),t._v(" apply\nmethod.")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" damavand "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" dvd\n\nnum_qubits "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\ncircuit "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Circuit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" apply_method"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"brute_force"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncircuit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_rotation_x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncircuit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forward"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"shuffle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shuffle"}},[t._v("#")]),t._v(" Shuffle")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" damavand "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" dvd\n\nnum_qubits "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\ncircuit "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dvd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Circuit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" apply_method"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shuffle"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncircuit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_rotation_x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncircuit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forward"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"multithreading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multithreading"}},[t._v("#")]),t._v(" Multithreading")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" damavand "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" dvd\n\nnum_qubits "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\ncircuit "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dvd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Circuit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" apply_method"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"multithreading"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncircuit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_rotation_x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncircuit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forward"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);