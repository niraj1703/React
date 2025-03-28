import { Link } from 'react-router-dom';
export default function Footer() {
    return (
      
    <>
         
         <Link to="sellerlogin" >
        <button type="button">Click Me</button> 
                </Link>
        <main>
        
                <h1>How to Sell on Amazon.in?</h1>
           
    
            <section>
                <article >
                    <figure>
                        <img src="https://via.placeholder.com/150" alt="Step 1 Image"/>
                    </figure>
                    <h2>STEP 1: Register your account</h2>
                    <p>Register on Amazon with GST/PAN details and an active bank account.</p>
                </article>
    
               
                <article>
                    <figure>
                        <img src="https://via.placeholder.com/150" alt="Step 2 Image"/>
                    </figure>
                    <h2>STEP 2: Choose storage & shipping</h2>
                    <p>Choose storage, packaging, and delivery options.</p>
                </article>
    
        
                <article>
                    <figure>
                        <img src="https://via.placeholder.com/150" alt="Step 3 Image"/>
                    </figure>
                    <h2>STEP 3: List your products</h2>
                    <p>List your products by providing product and brand details.</p>
                </article>
    
            
                <article>
                    <figure>
                        <img src="https://via.placeholder.com/150" alt="Step 4 Image"/>
                    </figure>
                    <h2>STEP 4: Complete orders & get paid</h2>
                    <p>Deliver orders to customers on time and get paid within 7 days of delivery.</p>
                </article>
            </section>

            <Link to="sellerlogin" >
        <button type="button">Click Me</button> 
                </Link>
        </main>
        
        
        </>
       
    );
}