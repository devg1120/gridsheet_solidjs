FPATH=react-core/src
FPATH=src

if [ -d ${FPATH}_ ]; then
    echo ""
else
    #echo original copy to ${FPATH}_
    #cp -r  ${FPATH}   ${FPATH}_
    echo ""
fi

cp -r ${FPATH}_   ${FPATH}


#diff -r ${FPATH}_   ${FPATH}

function replace() {
   #find ${TARGET_DIR}  -type f
   #find ${TARGET_DIR}  -type f | xargs sed -i "s/${BEFORE}/${AFTER}/g"
   #find ${1}  -type f
   find ${1}  -type f | xargs sed -i "s/${2}/${3}/g"

}

TARGET_DIR=${FPATH}

EXEC=1

if [ ${EXEC} -eq 1 ]; then

   #BEFORE="\"\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/dist\/mxgraph\.es\.js\""
   #AFTER="\"\.\.\/\.\.\/\.\.\/\.\.\/dist\/mxgraph\.es\.js\""
   #BEFORE="\"react\""
   #AFTER="\"solid-js\""
   
   #find ${TARGET_DIR}  -type f
   #find ${TARGET_DIR}  -type f | xargs sed -i "s/${BEFORE}/${AFTER}/g"
  
   BEFORE="\"react\""
   AFTER="\"solid-js\""
   replace ${TARGET_DIR}  ${BEFORE}  ${AFTER}

   BEFORE="className"
   AFTER="class"
   replace ${TARGET_DIR}  ${BEFORE}  ${AFTER}

   BEFORE="useState"
   AFTER="createSignal"
   replace ${TARGET_DIR}  ${BEFORE}  ${AFTER}

   BEFORE="useEffect"
   AFTER="createEffect"
   replace ${TARGET_DIR}  ${BEFORE}  ${AFTER}

   BEFORE="useMemo"
   AFTER="createMemo"
   replace ${TARGET_DIR}  ${BEFORE}  ${AFTER}
fi

diff -r --side-by-side --suppress-common-lines  ${FPATH}_   ${FPATH}
#diff -r   ${FPATH}_   ${FPATH}


