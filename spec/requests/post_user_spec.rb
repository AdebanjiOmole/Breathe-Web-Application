require 'rails_helper'

RSpec.describe 'User', type: :request do
  describe 'USER /create' do
    context 'with valid parameters' do
      let!(:my_post) { FactoryBot.create(:post) }

      before do
        post '/api/v1/users', params:
                          { user: {
                            first_name: name.first_name,
                            last_name: last_name.name,
                            email: email.email,
                            mobile_number: mobile_number.mobile_number,
                            health_care_address: health_care_address.health_care_address,
                            password_digest: password_digest.password_digest
                          } }
      end

      response 'should be 201' do
        expect(json['response.status']).to eq(201)
      end

      it 'returns the content' do
        expect(json['']).to eq(user.)
      end

      it 'returns a created status' do
        expect(response).to have_http_status(:created)
      end
    end

    context 'with invalid parameters' do
      before do
        post '/api/v1/user', params:
                          { user: {
                            first_name: '',
                            last_name: ''
                            email: '',
                            mobile_number: '',
                            health_care_address: '',
                            password_digest: ''
                          } }
      end

      it 'returns a unprocessable entity status' do
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end