require 'flutterwave_sdk'
class Payment

# Initialize with your API keys
@@flw = Flutterwave.new("FLWPUBK_TEST-449e7a05a0b763b87095bd47dc72d289-X", "FLWSECK_TEST-6fe28edddce7188ebfe5812141f8a845-X", "FLWSECK_TEST4cea9f43e7c1")

@@transfer = Transfer.new(@@flw)

        def self.generate_payment_link(payment_payload)
         # puts @@transfer.inspect
         # response = @@transfer.create(payment_payload)
         response= HTTParty.post(
  "https://api.flutterwave.com/v3/payments", 
  headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer FLWSECK_TEST-6fe28edddce7188ebfe5812141f8a845-X' },
  body: payment_payload.to_json
)
         response["data"]["link"]
         end
  end