# chmod
[Explination of numbers](http://www.thinkplexx.com/learn/article/unix/command/chmod-permissions-flags-explained-600-0600-700-777-100-etc)

Permission:
1 - can execute
2 - can write
4 - can read

3 (1+2) - can execute and write
6 (2+4) - can write and read

Position of the digit:
1 - what owner can
2 - what users in the file group can
3 - what users not in the file group can

chmod 700 - owner can read, write, and execute
chmod 777 - everyone can read, write, and execute

# shutdown
[Explination](https://www.computerhope.com/unix/ushutdow.htm)
shutdown [-akrhPHfFnc] [-t sec] time [message]

| Flag | Result                         |
|------|--------------------------------|
| -r   | Reboot after shutdown          |
| -P   | Shutdown and then power down   |
| now  | Shutdown right after execution |

sudo shutdown -r now

# nginx
```sh
sudo systemctl stop nginx
sudo systemctl start nginx
sudo systemctl restart nginx

sudo systemctl reload nginx
```

# pm2
```sh
pm2 start script.js
pm2 stop app_name_or_id
pm2 restart app_name_or_id
pm2 list
```