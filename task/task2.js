<<<<<<< HEAD
let islike = false;
let iscomment = false;
let isshare = false;
let ispost = false;
let isArchived = false;

// Like functionality
async function likecode() {
    return new Promise((liked, alreadyliked) => {
        if (!islike) {
            islike = true;
            liked("Liked the post successfully.");
        } else {
            alreadyliked("You already liked the post.");
        }
    });
}

async function unlikecode() {
    return new Promise((resolve, reject) => {
        if (islike) {
            islike = false;
            resolve("Like removed successfully.");
        } else {
            reject("You have not liked the post yet.");
        }
    });
}

// Comment functionality
async function commentcode() {
    return new Promise((commentposted, alreadycommented) => {
        if (!iscomment) {
            iscomment = true;
            commentposted("Comment posted successfully on the post.");
        } else {
            alreadycommented("You already commented on this section.");
        }
    });
}

async function uncommentcode() {
    return new Promise((resolve, reject) => {
        if (iscomment) {
            iscomment = false;
            resolve("Comment removed successfully.");
        } else {
            reject("You have not commented on this post yet.");
        }
    });
}

// Share functionality
async function sharecode() {
    return new Promise((shared, alreadyshared) => {
        if (!isshare) {
            isshare = true;
            shared("Post shared successfully.");
        } else {
            alreadyshared("You already shared the post.");
        }
    });
}

async function unsharecode() {
    return new Promise((resolve, reject) => {
        if (isshare) {
            isshare = false;
            resolve("Share removed successfully.");
        } else {
            reject("You have not shared this post yet.");
        }
    });
}

// Archive functionality
async function archivecode() {
    return new Promise((archived, alreadyArchived) => {
        if (!isArchived) {
            isArchived = true;
            archived("Post archived successfully.");
        } else {
            alreadyArchived("Post is already archived.");
        }
    });
}

async function unarchivecode() {
    return new Promise((resolve, reject) => {
        if (isArchived) {
            isArchived = false;
            resolve("Post unarchived successfully.");
        } else {
            reject("Post is not archived yet.");
        }
    });
}

// Create post functionality
async function createPost() {
    const post = new Promise((cpost) => {
        cpost("Post created successfully.");
    });

    await Promise.all([post, commentcode(), likecode(), sharecode(), archivecode()])
        .then(([post, comment, like, share, archive]) => {
            console.log(post);
            console.log(comment);
            console.log(like);
            console.log(share);
            console.log(archive);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Remove post functionality
async function removepost() {
    const unpost = new Promise((rpost) => {
        rpost("Post removed successfully.");
    });

    await Promise.all([unpost, uncommentcode(), unlikecode(), unsharecode(), unarchivecode()])
        .then(([unpost, uncomment, unlike, unshare, unarchive]) => {
            console.log(unpost);
            console.log(uncomment);
            console.log(unlike);
            console.log(unshare);
            console.log(unarchive);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Run the functions
createPost();

setTimeout(() => {
    console.log("Removing post...");
    removepost();
}, 2000);
=======
// 1. Function without arguments, with return type (Arrow function)
const calculateGST = () => {
    const originalPrice = 2200; 
    const gstRate = 10; 
    const gstAmount = (originalPrice * gstRate) / 100;
    const finalPrice1 = originalPrice + gstAmount;
    return finalPrice1; 
  };
  
  // 2. Function with arguments, with return type (Arrow function)
  const calculateGSTWithArguments = (originalPrice, gstRate) => {
    const gstAmount = (originalPrice * gstRate) / 100;
    const finalPrice2 = originalPrice + gstAmount; 
    return finalPrice2; 
  };
  
  // 3. Function without arguments, without return type (Arrow function)
  const logGST = () => {
    const originalPrice = 1800; 
    const gstRate = 20; 
    const gstAmount = (originalPrice * gstRate) / 100;
    const finalPrice3 = originalPrice + gstAmount;
    console.log("Final price after GST (without return type): ₹" + finalPrice3);
  };
  
  // 4. Function with arguments, without return type (Arrow function)
  const logGSTWithArguments = (originalPrice, gstRate) => {
    const gstAmount = (originalPrice * gstRate) / 100;  
    const finalPrice4 = originalPrice + gstAmount; 
    console.log("Final price after GST (with arguments and no return type): ₹" + finalPrice4); 
  };
  
  // Calling the functions and logging the results
  
  const finalPrice1 = calculateGST(); 
  console.log("Final price after GST (without arguments): ₹" + finalPrice1); 
  
  const finalPrice2 = calculateGSTWithArguments(1500, 10); 
  console.log("Final price after GST (with arguments): ₹" + finalPrice2); 
  
  logGST(); 
  
  logGSTWithArguments(3000, 15);
   
  
>>>>>>> 657e65ae6a1e532ef1f30d491ee0208f47de407f
