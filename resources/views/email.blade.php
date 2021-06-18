<html>
<head>
    <style>

        .title {
            text-align: center;
            margin: 50px;
            font-size: 20px;
        }

        .body {
            margin: 0 120px 120px;
            padding: 25px;
            background-color: gainsboro;
        }

        .why-email {
            text-align: start;
            margin: 0 100px;
        }

        span {
            font-weight: bold;
        }

    </style>
</head>
<body>
<h1 class="title">Sribay Contact Request</h1>
<h2><?=$data['first_name'] ." ". $data['last_name']?></h2>
<h3><?=$data['email']?></h3>
<h4><?=$data['subject']?></h4>
<div class="body">
    <p><?=$data['message'] ?></p>
</div>
</body>
</html>'
