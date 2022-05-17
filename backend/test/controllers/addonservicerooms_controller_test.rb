require "test_helper"

class AddonserviceroomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @addonserviceroom = addonservicerooms(:one)
  end

  test "should get index" do
    get addonservicerooms_url, as: :json
    assert_response :success
  end

  test "should create addonserviceroom" do
    assert_difference("Addonserviceroom.count") do
      post addonservicerooms_url, params: { addonserviceroom: { name: @addonserviceroom.name, price: @addonserviceroom.price } }, as: :json
    end

    assert_response :created
  end

  test "should show addonserviceroom" do
    get addonserviceroom_url(@addonserviceroom), as: :json
    assert_response :success
  end

  test "should update addonserviceroom" do
    patch addonserviceroom_url(@addonserviceroom), params: { addonserviceroom: { name: @addonserviceroom.name, price: @addonserviceroom.price } }, as: :json
    assert_response :success
  end

  test "should destroy addonserviceroom" do
    assert_difference("Addonserviceroom.count", -1) do
      delete addonserviceroom_url(@addonserviceroom), as: :json
    end

    assert_response :no_content
  end
end
