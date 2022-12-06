<?php
	require_once"common/sidebar.php";
    if(!$is_online){ header("Location: index");}
    if(isset($_GET['page'])&&is_numeric($_GET['page'])){
        $start=$_GET['page'];
    }else{
        $start=0;
    }

?>

<!--===== main page content =====-->
<div class="content">
    <div class="container">
        <div class="page_content">
        <div style="text-align: center;">
        <?php if(!empty($top_ad['code'])){  echo base64_decode($top_ad['code']);} ?>
        </div>
            <div class="table_wrapper">
                <div class="table">
                    <table> 
                        <caption>Pending List</caption>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Url</th>
                                <th>Category</th>
                                <th>Contact</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Conditions</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                             $start_page=$start*10;
                                $products=_getAllData($db,"SELECT * FROM `product_system` WHERE uid='$ses_id' AND activity=1 AND conditions != '' ORDER BY id DESC");
                                foreach($products as $product){ ?>
                            <tr>
                                <td>
                                    <img style="width:100px;height:50px;" src="upload/<?php echo $product['file'];?>" >
                                </td>
                                <td><?php echo $product['product_title'];?></td>
                                <td><?php echo $product['amount'];?></td>
                                <td><?php echo $product['web_link'];?></td>
                                <td><?php echo $product['category'];?></td>
                                <td><?php echo $product['contact'];?></td>
                                <td><?php echo $product['job_time'];?></td>
                                <td><?php echo $product['status'];?></td>
                                <td>
                                    <?php if($product['conditions']=='Running'){ ?>
                                        <b style="color:#EF4444"><?php echo $product['conditions'];?></b>
                                    <?php }else{?>
                                        <b style="color:#16A34A"><?php echo $product['conditions'];?></b>
                                        <?php }?>
                                </td>
                                
                                <td>
                                    <?php if($product['conditions']=='Running'){ ?>
                                    <a class="list_btn" style="background:#EF4444;" href="edit-product?id=<?php echo $product['id'];?>">Edit</a>
                                    <a class="list_btn" style="background:#16A34A;" href="product-page?id=<?php echo $product['id'];?>">View</a>                                    
                                      <?php  }else{?>
                                        <a class="list_btn" style="background:#16A34A;" href="product-page?id=<?php echo $product['id'];?>">View</a>
                                      <?php  }?>

                                </td>
                            </tr> 

                            <?php }?>
                        </tbody>
                    </table>
                </div>
            </div>
            <br />
            </div>
        </div>



        <?php include"common/footer.php"; ?>
