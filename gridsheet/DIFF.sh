SRC1=case20_2
SRC2=case21

diff -r -y  --suppress-common-lines --color=always    ./${SRC1}/react-core/src  ./${SRC2}/react-core/src  | less -R
diff -r  --color=always    ./${SRC1}/react-core/src  ./${SRC2}/react-core/src  | less -R
#diff -r -y  --suppress-common-lines --color=always    ./${SRC1}/src  ./${SRC2}/src  


