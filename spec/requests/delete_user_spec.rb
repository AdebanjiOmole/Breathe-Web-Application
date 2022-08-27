require 'rails_helper'

RSpec.describe 'User', type: :request do
  describe "DELETE /destroy" do
    let!(:user) { FactoryBot.create(:user) }

    before do
      delete "/api/v1/user/#{post.id}"
    end

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end