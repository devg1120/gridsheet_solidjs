#find . -type d -name "node_modules" -maxdepth 3  | xargs  rm -r
#find . -type d -name "node_modules" -maxdepth 3  
#
if [ -z "$1" ]; then
  echo ""
else
  if [ "$1" = "rm" ]; then
     echo "arg  rm"
     find . -type d -name "node_modules" -maxdepth 3  | xargs  rm -r
     exit
  else
     echo ""
  fi
fi
find . -type d -name "node_modules" -maxdepth 3  
