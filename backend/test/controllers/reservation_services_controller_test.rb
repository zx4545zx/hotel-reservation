require "test_helper"

class ReservationServicesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reservation_service = reservation_services(:one)
  end

  test "should get index" do
    get reservation_services_url, as: :json
    assert_response :success
  end

  test "should create reservation_service" do
    assert_difference("ReservationService.count") do
      post reservation_services_url, params: { reservation_service: { reservation_id: @reservation_service.reservation_id, service_id: @reservation_service.service_id } }, as: :json
    end

    assert_response :created
  end

  test "should show reservation_service" do
    get reservation_service_url(@reservation_service), as: :json
    assert_response :success
  end

  test "should update reservation_service" do
    patch reservation_service_url(@reservation_service), params: { reservation_service: { reservation_id: @reservation_service.reservation_id, service_id: @reservation_service.service_id } }, as: :json
    assert_response :success
  end

  test "should destroy reservation_service" do
    assert_difference("ReservationService.count", -1) do
      delete reservation_service_url(@reservation_service), as: :json
    end

    assert_response :no_content
  end
end
