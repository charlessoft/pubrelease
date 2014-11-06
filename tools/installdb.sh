#!/bin/bash 
source ../config.sh
SQLFILETMP=/tmp/tmppubrelease.sql
cp ../docs/${SQL_FILE} ./
if [ ! -f "${SQL_FILE}" ]; then \
    echo "文件不存在"; \
    exit 1;
else
    sed -e '7i DROP DATABASE IF EXISTS `pubrelease`;'  ${SQL_FILE} | \
        sed -e '8i create DATABASE `pubrelease`;' | \
        sed -e '9i USE `pubrelease`;' > ${SQLFILETMP}
    mysql -u${MYSQL_USER} -p${PASSWORD} < ${SQLFILETMP}
    rm -fr ${SQL_FILE}
fi

cp ../docs/pubrelease_data.sql ./
mysql -u${MYSQL_USER} -p${PASSWORD} <  pubrelease_data.sql
rm -fr pubrelease_data.sql
