(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{397:function(a,t,s){"use strict";s.r(t);var e=s(54),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),s("p",[s("strong",[a._v("Damavand")]),a._v("'s core is written in "),s("a",{attrs:{href:"https://www.rust-lang.org/fr",target:"_blank",rel:"noopener noreferrer"}},[a._v("Rust"),s("OutboundLink")],1),a._v(". It is binded with a C++ library: "),s("strong",[a._v("damavand-gpu")]),a._v(" that\nallows to take full advantage of "),s("strong",[a._v("Nvidia GPUs")]),a._v(" through the "),s("a",{attrs:{href:"https://developer.nvidia.com/cuda-zone",target:"_blank",rel:"noopener noreferrer"}},[a._v("CUDA framework"),s("OutboundLink")],1),a._v(".\nFinally, damavand is wrapped in "),s("strong",[a._v("Python")]),a._v(".")]),a._v(" "),s("p",{attrs:{align:"center"}},[s("img",{attrs:{src:"/damavand/rust_logo.png",width:"100em"}}),a._v(" "),s("img",{attrs:{src:"/damavand/cpp_logo.png",width:"100em"}}),a._v(" "),s("img",{attrs:{src:"/damavand/cuda_logo.png",width:"100em"}}),a._v(" "),s("img",{attrs:{src:"/damavand/python_logo.png",width:"100em"}})]),a._v(" "),s("ol",[s("li",[a._v("install requirements")]),a._v(" "),s("li",[a._v("install from pypi")]),a._v(" "),s("li",[a._v("install from Dockerfile")]),a._v(" "),s("li",[a._v("setup development environment")]),a._v(" "),s("li",[a._v("install on supercomputers")])]),a._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[a._v("#")]),a._v(" Requirements")]),a._v(" "),s("p",[a._v("The system requirements are already enumerated in "),s("code",[a._v("Dockerfiles/CPU/Dockerfile")]),a._v(" and in "),s("code",[a._v("Dockerfiles/GPU/Dockerfile")]),a._v(". Make\nsure that they are installed on you machine "),s("strong",[a._v("before")]),a._v(" installing from pypi. On Ubuntu, this would look like this:")]),a._v(" "),s("h3",{attrs:{id:"general"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[a._v("#")]),a._v(" general")]),a._v(" "),s("p",[a._v("Make sure that python is installed along with its utility pip.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" python3-pip\n")])])]),s("h3",{attrs:{id:"compilation-for-damavand-gpu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compilation-for-damavand-gpu"}},[a._v("#")]),a._v(" compilation for damavand-gpu")]),a._v(" "),s("p",[a._v("Install compilators for the GPU library")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" g++\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" cmake\n")])])]),s("h3",{attrs:{id:"damavand-rust"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#damavand-rust"}},[a._v("#")]),a._v(" damavand rust")]),a._v(" "),s("p",[a._v("Install Rust compilers.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --proto "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'=https'")]),a._v(" --tlsv1.2 -sSf https://sh.rustup.rs "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v("\n")])])]),s("p",[a._v("Install system dependencies.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" autoconf\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mpich\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" clang\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" libtool\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" texinfo\n")])])]),s("h3",{attrs:{id:"damavand-python"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#damavand-python"}},[a._v("#")]),a._v(" damavand python")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("pip3 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" setuptools-rust\npip3 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" matplotlib\npip3 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" pennylane\n")])])]),s("h2",{attrs:{id:"pypi-fetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pypi-fetch"}},[a._v("#")]),a._v(" pypi fetch")]),a._v(" "),s("p",[a._v("Damavand is linked to pypi. Once a new version is tagged on github, pypi automatically updates the version to the\nlatest one.")]),a._v(" "),s("p",[a._v("If you wish to install damavand easily and with the GPU, simply use:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("pip3 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" damavand\n")])])]),s("p",[a._v("On the other hand, if you do not have a CUDA-capable GPU on your machine, install as explained in\n"),s("code",[a._v("Dockerfiles/CPU/Dockerfile")]),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"install-via-dockerfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-via-dockerfile"}},[a._v("#")]),a._v(" Install via Dockerfile")]),a._v(" "),s("p",[a._v("If you wish to deploy damavand on a machine on which you do not want to install from source, you can use Dockerfiles, as\ndescribed here.")]),a._v(" "),s("p",[a._v("First, build the image in the root directory in CPU mode:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker build -t damavand-cpu-image -f Dockerfiles/CPU/Dockerfile\n")])])]),s("p",[a._v("or in GPU mode:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker build -t damavand-gpu-image -f Dockerfiles/GPU/Dockerfile\n")])])]),s("p",[a._v("Then, run the image with a bash prompt.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker run -it damavand-gpu-image "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])])]),s("p",[a._v("This method simplifies the installation process, but does not provide with enough flexibility to run on multiple nodes,\nas HPC architectures.")]),a._v(" "),s("h2",{attrs:{id:"contributing-to-damavand-development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contributing-to-damavand-development"}},[a._v("#")]),a._v(" Contributing to damavand development")]),a._v(" "),s("p",[a._v("Another mode of installation is by setting up the environement for development.")]),a._v(" "),s("h3",{attrs:{id:"clone-the-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clone-the-repository"}},[a._v("#")]),a._v(" Clone the repository")]),a._v(" "),s("p",[a._v("If you wish to develope further functionalities or correct bugs in damavand, you must first clone the git repository:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/previsionio/damavand.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" damavand/\n")])])]),s("h3",{attrs:{id:"building"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building"}},[a._v("#")]),a._v(" Building")]),a._v(" "),s("p",[a._v("Then comes the compiling phase, which can be done in two different modes.")]),a._v(" "),s("p",[a._v("If you install damavand in "),s("strong",[a._v("debug")]),a._v(" mode, you will be able to track the errors thanks to the provided traceback.\nSimply run:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cargo build\n")])])]),s("p",[a._v("Once you are confident that the code is functional, you can build damavand in release mode, which will run faster than\nin debug mode: compile in release mode.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cargo build --release\n")])])]),s("p",[a._v("You can also install damavand as a Python library directly\nFirst, install requirements:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("pip3 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -r requirements-dev.txt\n")])])]),s("p",[a._v("Then, execute:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("python3 setup.py "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),s("h2",{attrs:{id:"install-on-supercomputers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-on-supercomputers"}},[a._v("#")]),a._v(" Install on supercomputers")]),a._v(" "),s("p",[a._v("In order to compile damavand locally, you will need to load some modules first.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("module load rust\nmodule load openmpi\nmodule load automake\nmodule load libtool\nmodule load cmake\nmodule load cuda\nmodule load autoconf\nmodule load llvm\nmodule load gcc\n")])])]),s("p",[a._v("Once the modules are loaded, you will be able to compile damavand, just as described in the previous sections.\nHowever, you might lack an internet connection on the supercomputer, so the rust dependencies will not be downloaded.")]),a._v(" "),s("p",[a._v("In order to install damavand from sources, there is a workaround.")]),a._v(" "),s("p",[a._v("On your local computer, run:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" damavand/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" cargo\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CARGO_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PWD")]),a._v("/cargo cargo fetch\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" -R damavand/ "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("user"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("@"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("supercomputer"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(":"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path_to_working_directory"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);