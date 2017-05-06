#Apache
sudo yum -y install httpd
sudo systemctl start httpd.service
sudo systemctl enable httpd.service

#firewalld
sudo systemctl start firewalld.service
sudo systemctl enable firewalld.service
sudo firewall-cmd --zone=public --add-port=80/tcp --permanent
sudo firewall-cmd --zone=public --add-port=443/tcp --permanent
sudo firewall-cmd --reload

#MariaDB
sudo yum -y remove mariadb*
sudo rm -rf /var/lib/mysql/

#wget
sudo yum -y install wget

#vim 
sudo yum -y install vim

#MySQL
sudo wget http://dev.mysql.com/get/mysql-community-release-el7-5.noarch.rpm
sudo rpm -Uvh mysql-community-release-el7-5.noarch.rpm
sudo sed -i 's/enabled=1/enabled=0/g' /etc/yum.repos.d/mysql-community.repo
sudo yum -y --enablerepo=mysql56-community install mysql-community-server 
sudo systemctl start mysqld.service
sudo systemctl enable mysqld.service

#PHP
sudo yum -y install php php-mysql php-mbstring
sudo systemctl restart httpd.service

# chmod
sudo chmod -R 777 /var/www/html
